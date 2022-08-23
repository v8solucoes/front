import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@component/form/form.service';
import { IcreateForm, IFormData, Ilanguage, Ipermission, Irequest, ValidatorResponse } from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'
/* import { DataLocalService } from './data-local.service'; */

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 public errorResolve: any = null
  request!: Irequest

  constructor(
    public http: HttpClient,
    public dataDomain: DataLocal,
    private form: FormService
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

/*     console.log('Create MODEL')
    console.log(model.request) */
   
    return {
      ...model,
      form: this.form.createForm(model.language, model.request, model.permission, model.model, model.document)
    }
  
  }

}
