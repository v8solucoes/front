import { Injectable } from '@angular/core';
import { Idoc, Irequest, Iuser} from '@domain/interface';
import { DataLocal } from '@shared-angular/class'
import { UntypedFormGroup } from '@angular/forms';
import { NameProperty } from '@domain/typscript';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  user = {'level':'adm'} as Iuser;
  form: { [K in keyof Idoc]: UntypedFormGroup } = {} as any
  errorResolve: any = null
  language = null as any as Irequest['language']
  requestLast = {} as Irequest
  exit = false
  time = new Date().toString()
  documentName = 'null' as NameProperty<Idoc>;
  lastFirstName = '...' as String;

  subColectionIsTrue =  false as Boolean;
  subColectionName =  'null' as NameProperty<Idoc>;
  subColectionOrName = 'null' as NameProperty<Idoc>;
  subMenuIsTrue =  false as Boolean;
  subMenuName =  'null' as NameProperty<Idoc>;
  subMenuOrName = 'null' as NameProperty<Idoc>;

  constructor(
    public local: DataLocal,
  ) {

  }

}
