import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataLocalService } from '@repository/data-local.service';
import { DataService } from '@repository/data.service';
import { IFormData, Irequest } from '@shared-library/interface';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent {

  loading = false
  invalid = true
  valid = false
  processing = false;
  sucess = false;
  formData: IFormData;
  form: FormGroup;

  constructor(
/*     private activatedRoute: ActivatedRoute, */
    public dataLocal: DataLocalService,
    public data: DataService
  ) {
    
    this.formData = this.data.getLocal('account-adm')
    this.form = this.formData.form
    this.loading = true;
 /*    this.form = this.formService.get('account-adm').form */
  /*   this.activatedRoute.data.subscribe(params => {
      this.form = this.formService.get('account-adm').form
     }) */

/*     console.log(this.dataLocal) */
  }
  

  createAccount() {

    this.processing = true

    this.dataLocal.request!.data = this.formData.form.value

    console.log(this.formData.form.value)
    console.log(this.dataLocal.request)

    this.data.httpCRUD(this.dataLocal.request as Irequest).subscribe(o => {
      console.log(o)
      if (o == null) {

        setTimeout(() => {
          this.sucess = true
         
        }, 2000);
       /*  this.processing = false */
      }
      return 
    })

    /*     let reques: Irequest
    
        this.dataLocal.request?.data = this.form?.form.value */

    /*     this.incrementa++
        const form = this.formData.form
    
        form.get('email')?.setValue(`contato.0${this.incrementa}@v8sites.com.br`)
    
        const dados = {
          'cpf': form.get('nome')?.value,
          'email': form.get('email')?.value,
          'nome': form.get('nome')?.value,
          'senha': form.get('senha')?.value,
          'telefone': form.get('telefone')?.value,
        }
    
        const requisicaoDados: IrequestData = {
          credential: {
            user: {
              userUid: "semUsuario"
              , agencyId: "semUsuario"
              , clientId: "semCliente"
              , accessType: req.accessType
            }
            , request: {
              environment: "ambienteTesteV8"
              , moduleId: 'conta-adm'
              , itemId: req.itemId
              , action: "set"
              , function: "criarAutenticacao"
              , domain: req.domain
              , dateUpdate: new Date()
              , dateCreate: new Date()
            },
          },
          dados
        }
     */
    /*  this.dataAPI.httpCRUD('requisicaoDados').subscribe(
       (resposta: ValidatorResponse ) => {
         console.log(resposta)
         return resposta
       }) */

    /*     httpCRUD(req: Irequest): Observable<ValidatorResponse> {

          return this.http.post<ValidatorResponse>(`${environment.api}/CRUD`, req)
        } */
  }

}