import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from '@component/form/form.service';
import { IcreateForm, Ilanguage, ImodelUndefinedProperty, Ipermission, IpermissionNivel, Irequest, IresponseValidatorCompose, IresponseValidatorUnit } from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  permission!: IpermissionNivel
  model!: ImodelUndefinedProperty
  errorResolve: any = null
  language!: Ilanguage
  requestLast!: Irequest
  acessToken: string = ''
  credential: any = { teste: 'oi' }
  time = new Date().toString()
  

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
  httpUser(request: Irequest): Observable<any> {
 
    return this.http.get<any>(`${environment.api}/user/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpColection(request: Irequest): Observable<any> {
 
    return this.http.get<any>(`${environment.api}/colection/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)
    
  }
  models(req: Irequest) {

    const module = this.dataDomain.getModule(req.document)

    req.validator.id = req.document
    req.validator.label = req.document

    return {
      request: req,
      language: req.language,
      model: module.model,
      document: module.document,
      permission: module.permission,
    }
  }
  createForm(req: Irequest): IcreateForm<any> {
   
    const model = this.models(req)
/*     console.log(model.request)  */
/*     console.log('Create MODEL')
    console.log(model.request) */
   
    return {
      ...model,
      form: this.form.createForm(model.language, model.request, model.permission, model.model, model.document)
    }
  
  }
  document(req: Irequest): IcreateForm<any> {
   
    const model = this.models(req)
    console.log(model.request) 
/*     console.log('Create MODEL')
    console.log(model.request) */
   
    return {
      ...model,
      form: this.form.createForm(model.language, model.request, model.permission, model.model, model.document)
    }
  
  }

}
