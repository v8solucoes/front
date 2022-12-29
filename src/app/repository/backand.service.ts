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

    return this.http.get<any>(`${environment.api}/user/${this.data.user.acessToken}/${JSON.stringify(request)}`)
  }

  httpDocument(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/document/${this.data.user.acessToken}/${JSON.stringify(request)}`)
  }

  httpColection(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/colection/${this.data.user.acessToken}/${JSON.stringify(request)}`)
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
    console.log(action)
    console.log(req)

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/crudGeneric`, req)
  }

  /*   httpApi(req: Irequest): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  } */



/*   httpUser(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/user/${this.acessToken}/${JSON.stringify(request)}`)
  } */
 
 
 /*  httpAction(request: Irequest): Observable<any> {

    return this.http.get<any>(`${environment.api}/action/${this.acessToken}/${JSON.stringify(request)}`)
  } */
/*   httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)

  } */
}
