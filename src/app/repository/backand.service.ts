import { DataService } from '@repository/data.service';
import { Injectable } from '@angular/core';
import { Irequest, IresponseValidatorCompose } from '@domain/interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackandService {

  constructor(
    public http: HttpClient,
    public data: DataService
  ) { }

  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)
  }

  httpUser(request: Irequest): Observable<any> {

    const req = { ...request}

    return this.http.get<any>(`${environment.api}/user/${this.data.user.acessToken}/${JSON.stringify(this.removeUrl(req))}`)
  }
  removeUrl(req:Irequest):Irequest {
    delete req.lastUrl // because error caracter
    delete req.lastUrlNoLanguage // because error caracter
    return req 
  }

  httpDocument(request: Irequest): Observable<any> {

    const req = { ...request}

    return this.http.get<any>(`${environment.api}/document/${this.data.user.acessToken}/${JSON.stringify(this.removeUrl(req))}`)
  }

  httpColection(request: Irequest): Observable<any> {
    const req = { ...request}
    return this.http.get<any>(`${environment.api}/colection/${this.data.user.acessToken}/${JSON.stringify(this.removeUrl(req))}`)
  }

  httpCrudGeneric(action: Irequest['action']): Observable<IresponseValidatorCompose> {
    const data = this.data.form[this.data.requestLast.document].value
    let req = { ...this.data.requestLast }
    req.data = data
    req.action = action
    req.user = { ...this.data.user }
    req.validator = {
      id: 'name',
      name: 'anyResNull',
      label: 'crud',
      value: '',
      error: null,
      language: this.data.requestLast.language,
      typeExecute: 'back'
    }

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/crudGeneric`, req)
  }
}
