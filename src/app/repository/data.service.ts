import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from '@component/form/form.service';
import { IcreateForm, Ilanguage, ImodelUndefinedProperty, Ipermission, Irequest, IresponseValidatorCompose, IresponseValidatorUnit } from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  permission!: Ipermission[]
  model!: ImodelUndefinedProperty
  errorResolve: any = null
  language!: Ilanguage
  request!: { [key: string]: Irequest }
  acessToken: string = ''
  credential: any = { teste: 'oi' }
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  })
  

  constructor(
    public http: HttpClient,
    public dataDomain: DataLocal,
    private form: FormService
  ) {
   
  }

  httpApi(req: Irequest): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  }
  httpCRUD(req: Irequest): Observable<IresponseValidatorUnit> {

    return this.http.post<IresponseValidatorUnit>(`${environment.api}/CRUD`, req)
  }
  httpLogin(token: string, request: Irequest): Observable<any> {

    console.log(`'HTTP LOGIN'`)
    console.log(request)
 
    return this.http.get<any>(`${environment.api}/login/${token}/${JSON.stringify(request)}`)
  }
  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)
    
  }
  models(document: Irequest['document']) {

    const module = this.dataDomain.getModule(document)
    const req = { ...this.request[document] }

    req.validator.id = this.request[document].document
    req.validator.label = this.request[document].document
    /*     req.validator.name = this.request[document] */
 /*    console.log(this.request[document]) */
/*     console.log(req) */

    return {
      request: this.request[document],
      language: req.language,
      model: module.model,
      document: module.document,
      permission: module.permission,
    }
  }
  createForm(document: Irequest['document']): IcreateForm<any> {
   
    const model = this.models(document)
/*     console.log(model.request)  */
/*     console.log('Create MODEL')
    console.log(model.request) */
   
    return {
      ...model,
      form: this.form.createForm(model.language, model.request, model.permission, model.model, model.document)
    }
  
  }
  document(document: Irequest['document']): IcreateForm<any> {
   
    const model = this.models(document)
    console.log(model.request) 
/*     console.log('Create MODEL')
    console.log(model.request) */
   
    return {
      ...model,
      form: this.form.createForm(model.language, model.request, model.permission, model.model, model.document)
    }
  
  }

}
