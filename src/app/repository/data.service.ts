import { Injectable } from '@angular/core';
import { Idoc, Irequest, Iuser} from '@domain/interface';
import { DataLocal } from '@shared-angular/class'
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: Iuser = {'name':'Any','level':'adm','userId':'xx','acessToken':'xx'} 
  form: { [K in keyof Idoc]: UntypedFormGroup } = {} as any
  errorResolve: any = null
  language!: Irequest['language']
  requestLast!: Irequest
  exit = false

  time = new Date().toString()

  constructor(
    public local: DataLocal,
  ) {

  }

}
