import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from '@component/form/form.service';
import { IcreateForm, Ilanguage, Irequest, IresponseValidatorCompose, IresponseValidatorUnit } from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public errorResolve: any = null
  language!: Ilanguage
  request!: {[key:string]:Irequest}

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
    console.log(model.request) 
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
