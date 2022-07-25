import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { DataLocalService } from '@repository/data-local.service';
import { Ilanguage, ImodelUndefinedProperty, InameValidator, InameValidatorBack, Ipermission, Irequest, ValidatorResponse, ValidatorType, ValidatorTypeAsync } from '@shared-library/interface';
import { Validators } from '@shared-library/validator';
import { delay, first, map, Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  constructor(
    public dataLocal: DataLocalService,
    private http: HttpClient,
  ) { }

 createForm(permission: Ipermission[], model: ImodelUndefinedProperty, language: Ilanguage, data: any = null as any): FormGroup {

    let group: any = {};

    permission?.forEach((acess: Ipermission) => {

      const modelControl = model[acess.id];
      const recursive = () =>
        this.createForm(
          acess._group as Ipermission[],
          model[acess.id]._group as ImodelUndefinedProperty,
          language,
          data[acess.id]
        );
      const validators = () => modelControl.validate.sync.map(
        nameValidator => this.validatorType(nameValidator, language, acess.id))
      const validatorsAsync = () => modelControl.validate.async.map(
        nameValidatorAsync => this.validatorTypeAsync(nameValidatorAsync, language, acess.id))
        
      switch (model[acess.id].typeData) {
        case 'value':
          group[acess.id] = new FormControl(
            {
              value: data[acess.id] ? data[acess.id] : null,
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
 

  validatorType(validate: ValidatorType, language: Ilanguage, valueId: string) {

    const types = {
      validator: this.validator(validate.validator, language, valueId),
      back: this.validator(validate.validator, language, valueId),
    }

    return types[validate.type] as ValidatorFn

  }
  validatorTypeAsync(validate: ValidatorTypeAsync, language: Ilanguage, valueId: string) {

    const types = {
      validator: this.validatorBack(validate.validator, language, valueId),
      back: this.validatorBack(validate.validator, language, valueId),
    }

    return types[validate.type]

  }
  validator(nameValidator: InameValidator | InameValidatorBack, language: Ilanguage, valueId: string): ValidatorFn {

    return (control: AbstractControl): ValidatorResponse => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(control.value)?.pristine !== true &&
        control.value !== null
      ) {
        console.log('sync')

        return new Validators(
          {
            language,
            value: control.value,
            valueId,
            valueAll: control.root.value,
            nameValidator
          })[nameValidator as InameValidator].validate
      } else {
        return null;
      }
    };
  }

  validatorBack(nameValidator: InameValidatorBack | InameValidator, language: Ilanguage, valueId: string): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidatorResponse> | Promise<ValidatorResponse> => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(control.value)?.pristine !== true &&
        control.value !== null
      ) {
        let request = this.dataLocal.request as Required<Irequest>
        request.validator = {
          language,
          value: control.value,
          valueId,
          valueAll: control.root.value,
          nameValidator
        }

        console.log('Valid Back');
        console.log(request.validator);

        return this.http.post<ValidatorResponse>(`${environment.api}/validator`, request).pipe(
          delay(200),
          first(),
          map(res => {
            console.log('Resp Back')
            console.log(res)
            return res
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
  validatorAsync(nameValidator: InameValidator, language: Ilanguage, valueId: string): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidatorResponse> | Promise<ValidatorResponse> => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(control.value)?.pristine !== true &&
        control.value !== null
      ) {
        let request = this.dataLocal.request as Required<Irequest>
        request.validator = {
          language,
          value: control.value,
          valueId,
          valueAll: control.root.value,
          nameValidator
        }

        console.log('Form async');
        console.log(request.validator);

        return this.http.post<ValidatorResponse>(`${environment.api}/validator`, request).pipe(
          delay(200),
          first(),
          map(res => res)
        );

      } else {
        return of(control.value).pipe(
          delay(200),
          first(),
          map(res => null))
      }
    };
  }


  validatorAsyncXX(nameValidator: InameValidator, language: Ilanguage): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidatorResponse> => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(control.value)?.pristine !== true &&
        control.value !== null
      ) {
        console.log('async');
        return this.testPromises()

      } else {
        return Promise.resolve(null)
      }
    }
  }

  private validZipcodes = ['00001', '00002', '00003', '00004'];

  fakeHttp(value: string) {

    return of(this.validZipcodes.includes(value)).pipe(delay(5000));
  }



  async testPromises(): Promise<ValidatorResponse> {

    try {
      const promise1 = Promise.resolve({ proa: 'first' });
      const promise2 = { prob: 'secund' }
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, { proc: 'terceira' });
      });
      /*     const test = await Promise.all<ValidatorResponse>([promise1]) */
      return Promise.all<ValidatorResponse>([promise1, promise2, promise3]).then((values: ValidatorResponse) => {
        console.log(values)
        return { values: JSON.stringify(values) }
      });

    } catch (error) {
      return null
    }
  }
  /* 
    functionSync(text: string): ValidatorResponse {
      return new TestCompose({
        language: 'en',
        value: text,
      }).namePersonal
    } */
  httpApi(req: any): Observable<ValidatorResponse> {

    return this.http.post<ValidatorResponse>(`${environment.api}/api`, req).pipe(take(1))

  }

}
