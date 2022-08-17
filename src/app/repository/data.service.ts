import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@component/form/form.service';
import { IcreateForm, IFormData, Ilanguage, Ipermission, Irequest, ValidatorResponse } from '@shared-library/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'
/* import { DataLocalService } from './data-local.service'; */

@Injectable({
  providedIn: 'root'
})
export class DataService {
  errorResolve: any = null
  request!: Irequest

  constructor(
    public http: HttpClient,
    public dataDomain: DataLocal,
    private form: FormService
/*     public autenticar: AutenticarService */
  ) {
    
  }

  httpApi(req: Irequest): Observable<any> {

    return this.http.post<any>(`${environment.api}/api`, req)
  }
  httpCRUD(req: Irequest): Observable<ValidatorResponse> {

    return this.http.post<ValidatorResponse>(`${environment.api}/CRUD`, req)
  }
  models(document: Irequest['document']) {
    const module = this.dataDomain.getModule(document)
    return {
      request: this.request,
      language: this.request.language,
      model: module.model,
      document: module.document,
      permission: module.permission,
    }
  }
  createForm(document: Irequest['document']): IcreateForm {
   
    const model = this.models(document)
   
    return {
      ...model,
      form: this.form.createForm(model.request, model.permission, model.model, model.language, model.document)
    }
  
  }
  getLocal(document: Irequest['document'], request: Irequest): IFormData {

    let form: FormGroup;
    const permission = this.dataDomain.permission.filter((acess:Ipermission) => acess.id == document)
    const model = this.dataDomain.model
    const data = {[document]: this.dataDomain.document[document]}
    const language: Ilanguage = this.request?.language || 'en'

    form = this.form.createForm(request, permission, model, language, data)

    return {
      form,
      permission,
      model,
      language
    };
  }

}
