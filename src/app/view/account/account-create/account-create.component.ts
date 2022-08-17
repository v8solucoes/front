import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { IcreateForm, Irequest } from '@shared-library/interface';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent {

  loading = false
  valid = true
  processing = false;
  sucess = false;

  createForm: IcreateForm;

  constructor(
/*     private activatedRoute: ActivatedRoute, */
    public data: DataService
  ) {

    this.createForm = this.data.createForm('account-adm')
    
  }
  
  ngOnInit() {
    this.loading = true;
}
  createAccount() {
    this.valid = false
    this.processing = true;

    this.data.request.data = this.createForm.form.value

    console.log(this.data.request)

    this.data.httpCRUD(this.data.request as Irequest).subscribe(o => {
      console.log(o)
      if (o == null) {

        setTimeout(() => {
    /*       this.form.reset() */
          this.processing = false 
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