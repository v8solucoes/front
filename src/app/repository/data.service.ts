import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from '@component/form/form.service';
import { Icolection, IcreateForm, Ilanguage, ImodelUndefinedProperty, Imodule, Inivel, Ipermission, IpermissionNivel, Irequest, IresponseValidatorCompose, IresponseValidatorUnit, Iuser } from '@domain/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocal } from '@shared-angular/class'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user!: Iuser
  permission!: IpermissionNivel
  model!: ImodelUndefinedProperty
  colection: Icolection = {} as any
  errorResolve: any = null
  language!: Ilanguage
  requestLast!: Irequest
  acessToken: string = ''
  credential: any = { teste: 'oi' }
  time = new Date().toString()

  constructor(
    public http: HttpClient,
    public dataLocal: DataLocal,
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
  httpDocument(request: Irequest): Observable<any> {
 
    return this.http.get<any>(`${environment.api}/document/${this.acessToken}/${JSON.stringify(request)}`)
  }
  httpCRUDResponseCompose(req: Irequest): Observable<IresponseValidatorCompose> {

    return this.http.post<IresponseValidatorCompose>(`${environment.api}/CRUD`, req)
    
  }
  models(req: Irequest) {

    const module = this.dataLocal.getModule(req.document, req.user!.nivel)

    req.validator!.id = req.document
    req.validator!.label = req.document

    return {
      request: req,
      language: req.language,
      model: module.model,
      document: module.document,
      permission: module.permission,
    }
  }
  
  getColectionDocumentPermission(document: Irequest['document']) {

    const module = this.dataLocal.getModule(document, this.user!.nivel)

    return {

      language: this.language,
      model: module.model,
      colection: this.colection[document],
      permission: module.permission,
      colectionName: module.model[document].text[this.language]?.label
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
  createFormDocument(req: Irequest, document:any): IcreateForm<any> {
   
    const model = this.getModuleRemote(req.document, 'adm')
   
    return {
      ...model,
      document,
      'language': req.language,
      'request': req,
      form: this.form.createForm(req.language, req, model.permission, model.model, document)
    }
  
  }

  getModuleRemote (module: Irequest['document'], nivel:Inivel) {

    const permission = this.permission[nivel].filter((permissions:Ipermission) => permissions.id == module)
    const model = this.model

   nivel ? 'tem': console.log(`não tem Nível de Acesso: ${nivel}`)
   permission.length ? 'tem': console.log(`não tem Permission: ${module}`)
   this.permission[nivel].length ? 'tem': console.log(`não tem Permission: ${module}`)
   this.model[module] ? 'tem': console.log(`não tem Model: ${module}`)

    return {
      permission,
      model
    };
  }
}
