import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import {
  Ilanguage,
  ImodelUndefinedProperty,
  InameValidator,
  Ipermission,
  ValidatorReponse,
  ValidatorRequest,
} from '@shared-library/interface';
import { ValidatorMethod } from '@shared-library/validator';
import { delay, first, map, Observable, of } from 'rxjs';

export interface IFormData {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  form: FormGroup;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  data: any = {
    ['account-adm']: {
      name: 'DB Emeson Felix',
    },
  };

  permission: Ipermission[] = [
    {
      id: 'account-adm',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
      _group: [
        {
          id: 'name',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
      ],
    },
  ];

  model: ImodelUndefinedProperty = {
    'account-adm': {
      id: 'account-adm',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'New Account',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su conta',
          clearInput: 'Clear',
        },
      },
      validate: {
        sync: ['namePersonal'],
        async: [],
        updateOn:'change',
        disabled: false,
        valueMin: 8,
        valueMax: 35,
        required: false,
        front: 'string',
        back: 'string',
        teste: 'string',
      },
      design: {
        css: {
          materialDesign: {
            appearance: 'fill',
          },
          form: {
            container: 'f-total',
          },
        },
      },
      _group: {
        name: {
          id: 'name',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Test Name',
              placeholder: 'Fill in you name',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn:'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            front: 'string',
            back: 'string',
            teste: 'string',
          },
          design: {
            tools: {
              accont: true,
              clear: true,
            },
            css: {
              materialDesign: {
                appearance: 'fill',
              },
              form: {
                container: 'f-total',
              },
            },
          },
        },
      },
    },
  };

  constructor() { }

  exe(): IFormData {

    let form: FormGroup;

    form = this.createFormGroup(this.permission, this.model, this.data);

    console.log(form);

    return {
      form,
      permission: this.permission,
      model: this.model,
    };
  }

  createFormGroup(permission: Ipermission[], model: ImodelUndefinedProperty, data?: any): FormGroup {

    let group: any = {};
    let language: Ilanguage = 'en'

    permission?.forEach((acess: Ipermission) => {
      const modelText = model[acess.id].text[language]
      const dataValue = data ? data[acess.id] : modelText?.valueTest;
      const dataRecurive = data ? data[acess.id] : undefined;
      const modelControl = model[acess.id];
      const recursive = () =>
        this.createFormGroup(
          acess._group as Ipermission[],
          model[acess.id]._group as ImodelUndefinedProperty,
          dataRecurive
        );
      const validators = () => modelControl.validate.sync.map(nameValidator => this.validator(nameValidator, language))
      const validatorsAsync = () => modelControl.validate.async.map(nameValidator => this.validatorAsync(nameValidator, language))

      switch (model[acess.id].typeData) {
        case 'value':
          group[acess.id] = new FormControl(
            {
              value: dataValue,
              disabled: modelControl.validate.disabled,
            },
            {
              validators: validators(),
              asyncValidators: validatorsAsync(),
              updateOn: modelControl.validate.updateOn,
            }
          );
          break;

        case 'object':
          group[acess.id] = recursive();
          break;

        case 'array':
          group[acess.id] = new FormArray([recursive()]);
          break;

        default:
          break;
      }
    });

    return new FormGroup(group);
  }

  validatorAsync(nameValidator: InameValidator, language: Ilanguage): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidatorReponse> => {

      const controle = control.root as FormGroup;

      return of(control.value).pipe(
        delay(200),
        first(),
        map((res: any) => {
          if (
            !!controle.controls &&
            controle.get(control.value)?.pristine !== true &&
            control.value !== null
          ) {
            console.log('async');
            return new ValidatorMethod({ value: control.value, language})[nameValidator]
          } else {
            return null;
          }
        })
      );
    };
  }
  validator(nameValidator: InameValidator, language: Ilanguage): ValidatorFn {

    return (control: AbstractControl): ValidatorReponse => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(control.value)?.pristine !== true &&
        control.value !== null
      ) {
        console.log('sync')
        return new ValidatorMethod({ value: control.value, language })[nameValidator]
      } else {
        return null;
      }
    };
  }

  functionSync(text: string): ValidatorReponse {
    return new ValidatorMethod({
      language: 'en',
      value: text,
    }).namePersonal
  }


}
