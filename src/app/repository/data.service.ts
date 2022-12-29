import { Injectable } from '@angular/core';
import { Idoc, Ilanguage, Irequest, Iuser} from '@domain/interface';
import { DataLocal } from '@shared-angular/class'
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: Iuser = {'name':'Any','nivel':'adm','userId':'xx','acessToken':'xx'} 
  form: { [K in keyof Idoc]: UntypedFormGroup } = {} as any
  errorResolve: any = null
  language!: Ilanguage
  requestLast!: Irequest
 /*  acessToken: string = '' */
/*   credential: any = { teste: 'oi' } */
  time = new Date().toString()

  constructor(
    public local: DataLocal,
  ) {

  }

}
