import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@component/form/form.service';
import { IFormData, Ilanguage, Ipermission, Irequest, ValidatorResponse } from '@shared-library/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocalService } from './data-local.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    public http: HttpClient,
    public dataLocal: DataLocalService,
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
  getLocal(document: Irequest['document']): IFormData {

    let form: FormGroup;
    const permission = this.dataLocal.permission.filter((acess:Ipermission) => acess.id == document)
    const model = this.dataLocal.model
    const data = {[document]: this.dataLocal.document[document]}
    const language: Ilanguage = this.dataLocal.request?.language || 'en'

    form = this.form.createForm(permission, model, language, data)

    return {
      form,
      permission,
      model,
      language
    };
  }

}
