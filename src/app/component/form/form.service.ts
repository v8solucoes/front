import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Ilanguage, ImodelUndefinedProperty, InameValidatorLocal, InameValidatorRemote, Ipermission, Irequest, Ivalidator, IvalidatorResponse } from '@domain/interface';
import { ValidatorsLocal } from '@domain/validator-local';
import { delay, first, map, Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
  
export class FormService {

  constructor(private http: HttpClient) {

   }

  createForm(language: Ilanguage, request: Irequest, permissions: Ipermission[], model: ImodelUndefinedProperty, data: any = null as any): FormGroup {

    let group: any = {};
   /*  console.log(request) */

    for (const permission of permissions) {

      const modelControl = model[permission.id];

      const recursive = () =>
        this.createForm(
          language,
          request,
          permission._group as Ipermission[],
          model[permission.id]._group as ImodelUndefinedProperty,
          data[permission.id]
        );
      
      const validatorRequest = (validatorName: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const  req = {...request}
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
          group[permission.id] = new FormControl(

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
          group[permission.id] = new FormArray([recursive()]);
          break;

        default:
          break;
      }
    };

    return new FormGroup(group);
  }

  local(req: Irequest): ValidatorFn {

    return (control: AbstractControl): IvalidatorResponse => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(req.validator.id)?.pristine !== true &&
        control.value !== null
      ) {
        
        req.validator!.value = control.value

        const response = new ValidatorsLocal(req)[req.validator!.name as InameValidatorLocal].validate

        return response

      } else {
        return null;
      }
    };
  }

  remote(req: Irequest): AsyncValidatorFn {

    return (control: AbstractControl): Observable<IvalidatorResponse> | Promise<IvalidatorResponse> => {

      const controle = control.root as FormGroup;

      if (
        !!controle.controls &&
        controle.get(req.validator.id)?.pristine !== true &&
        control.value !== null
      ) {
        req.validator!.value = control.value
   /*      console.log('Valid Remote Req');
        console.log(req); */

        return this.http.post<IvalidatorResponse>(`${environment.api}/validator`, req).pipe(
          delay(200),
          first(),
          map((response: IvalidatorResponse) => {
 
            return response
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

  async testPromises(): Promise<IvalidatorResponse> {

    try {
      const promise1 = Promise.resolve({ proa: 'first' });
      const promise2 = { prob: 'secund' }
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, { proc: 'terceira' });
      });
      /*     const test = await Promise.all<IvalidatorResponse>([promise1]) */
      return Promise.all<IvalidatorResponse>([promise1, promise2, promise3]).then((values: IvalidatorResponse) => {
        console.log(values)
        return { values: JSON.stringify(values) }
      });

    } catch (error) {
      return null
    }
  }

  httpApi(req: any): Observable<IvalidatorResponse> {

    return this.http.post<IvalidatorResponse>(`${environment.api}/api`, req).pipe(take(1))

  }

}
