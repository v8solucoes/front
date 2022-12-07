import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idoc, Ilanguage, Irequest, IresponseValidatorCompose, Iuser} from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user!: Iuser
  form: { [K in keyof Idoc]: UntypedFormGroup } = {} as any
  errorResolve: any = null
  language!: Ilanguage
  requestLast!: Irequest
  acessToken: string = ''
  credential: any = { teste: 'oi' }
  time = new Date().toString()

  constructor(
    public http: HttpClient,
    public local: DataLocal,
  ) {

  }

  httpApi(req: Irequest): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  }

  httpCrudGeneric(action: Irequest['action']): Observable<IresponseValidatorCompose> {
    const data = this.form[this.requestLast.document].value
    let req = { ...this.requestLast }
    req.data = data
    req.action = action
    req.user = { ...this.user }
    req.validator = {
      id: 'name',
      name: 'anyResNull',
      label: 'crud',
      value: '',
      error: null,
      language: this.requestLast.language,
      typeExecute: 'back'
    }
    console.log(action)
    console.log(req)

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/crudGeneric`, req)
    /* .pipe(

      map((response: IresponseValidatorCompose) => {
        console.log('UPDATE MAP')
        return response ? response!.error : null
      })
    ); */
  }

  httpUser(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/user/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpColection(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/colection/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpDocument(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/document/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpAction(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/action/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)

  }

}
