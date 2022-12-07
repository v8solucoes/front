import { DataService } from '@repository/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, UntypedFormArray, UntypedFormControl, UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { InameValidatorLocal, InameValidatorRemote, Irequest, Ivalidator, IresponseValidatorUnit, IresponseValidatorCompose} from '@domain/interface';
import { ValidatorsLocal } from '@domain/validator-local';
import { delay, first, map, Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class FormService {

  constructor(
    private http: HttpClient,
    private data: DataService
  ) { }
  
  createForm(
    permissions = this.data.local.getRecursive(this.data.requestLast.document).permission,
    model = this.data.local.getRecursive(this.data.requestLast.document).model,
    data = this.data.local.getRecursive(this.data.requestLast.document).document): UntypedFormGroup {
    
    const language = this.data.language    
  
    let group: any = {};

    for (const permission of permissions) {

      const modelControl = model[permission.id];

      const recursive = () =>
        this.createForm(
          permission._group as any,
          model[permission.id]._group,
          data[permission.id] as any
        );

      const validatorRequest = (validatorName: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const req = { ...this.data.requestLast }
        const validator: Ivalidator = {
          id: permission.id,
          label: model[permission.id].text[language]!.label,
          value: data[permission.id] ? data[permission.id] : null,
          language: language,
          name: validatorName,
          typeExecute: 'front',
          error: null
        }
        req.validator = validator

        return req
      }

      const validators = () => modelControl.validate.sync.map(
        (validator:any) => this.local(validatorRequest(validator)))

      const validatorsAsync = () => modelControl.validate.async.map(
        (validator:any) => this.remote(validatorRequest(validator)))

      switch (model[permission.id].typeData) {
        case 'value':
          group[permission.id] = new UntypedFormControl(

            {
              value: data[permission.id] ? data[permission.id] : null,
              disabled: modelControl.validate.disabled,
            },

            {
              validators: validators(),
              asyncValidators: validatorsAsync(),
              updateOn: modelControl.validate.updateOn,
            },

          );
          break;

        case 'object':
          group[permission.id] = recursive();
          break;

        case 'array':
          group[permission.id] = new UntypedFormArray([recursive()]);
          break;

        default:
          break;
      }
    };

    return new UntypedFormGroup(group);
  }
  /* createForm(language: Ilanguage, request: Irequest, permissions:any, model: ImodelUndefinedProperty, data: any = null as any): UntypedFormGroup {

    let group: any = {};

    for (const permission of permissions) {

      const modelControl = model[permission.id];

      const recursive = () =>
        this.createForm(
          language,
          request,
          permission._group as any,
          model[permission.id]._group as ImodelUndefinedProperty,
          data[permission.id]
        );

      const validatorRequest = (validatorName: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const req = { ...request }
        const validator: Ivalidator = {
          id: permission.id,
          label: model[permission.id].text[language]!.label,
          value: data[permission.id] ? data[permission.id] : null,
          language: language,
          name: validatorName,
          typeExecute: 'front',
          error: null
        }
        req.validator = validator

        return req
      }

      const validators = () => modelControl.validate.sync.map(
        validator => this.local(validatorRequest(validator)))

      const validatorsAsync = () => modelControl.validate.async.map(
        validator => this.remote(validatorRequest(validator)))

      switch (model[permission.id].typeData) {
        case 'value':
          group[permission.id] = new UntypedFormControl(

            {
              value: data[permission.id] ? data[permission.id] : null,
              disabled: modelControl.validate.disabled,
            },

            {
              validators: validators(),
              asyncValidators: validatorsAsync(),
              updateOn: modelControl.validate.updateOn,
            },

          );
          break;

        case 'object':
          group[permission.id] = recursive();
          break;

        case 'array':
          group[permission.id] = new UntypedFormArray([recursive()]);
          break;

        default:
          break;
      }
    };

    return new UntypedFormGroup(group);
  } */

  local(req: Irequest): ValidatorFn {

    return (control: AbstractControl): IresponseValidatorUnit => {

      const controle = control.root as UntypedFormGroup;

      if (
        !!controle.controls &&
        controle.get(req.validator!.id)?.pristine !== true &&
        control.value !== null
      ) {

        req.validator!.value = control.value

        const response = new ValidatorsLocal(req)[req.validator!.name as InameValidatorLocal].validate

        return response ? response!.error : null

      } else {
        return null;
      }
    };
  }

  remote(req: Irequest): AsyncValidatorFn {

    return (control: AbstractControl): Observable<IresponseValidatorUnit> | Promise<IresponseValidatorUnit> => {

      const controle = control.root as UntypedFormGroup;

      if (
        !!controle.controls &&
        controle.get(req.validator!.id)?.pristine !== true &&
        control.value !== null
      ) {
        req.validator!.value = control.value
        /*      console.log('Valid Remote Req');
             console.log(req); */

        return this.http.post<IresponseValidatorCompose>(`${environment.api}/validator`, req).pipe(
          delay(200),
          first(),
          map((response: IresponseValidatorCompose) => {

            return response ? response!.error : null
          })
        );

      } else {
        return of(control.value).pipe(
          delay(200),
          first(),
          map(res => null))
      }
    };
  }

  async testPromises(): Promise<IresponseValidatorUnit> {

    try {
      const promise1 = Promise.resolve({ proa: 'first' });
      const promise2 = { prob: 'secund' }
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, { proc: 'terceira' });
      });
      /*     const test = await Promise.all<IresponseValidatorUnit>([promise1]) */
      return Promise.all<IresponseValidatorUnit>([promise1, promise2, promise3]).then((values: IresponseValidatorUnit) => {
        console.log(values)
        return { values: JSON.stringify(values) }
      });

    } catch (error) {
      return null
    }
  }

  httpApi(req: any): Observable<IresponseValidatorUnit> {

    return this.http.post<IresponseValidatorUnit>(`${environment.api}/api`, req).pipe(take(1))

  }

}
