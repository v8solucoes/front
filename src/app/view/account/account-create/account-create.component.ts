import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService, IFormData } from '@component/form/form.service';
import { DataLocalService } from '@repository/data-local.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent {

  loading = false

  form?: IFormData;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formService: FormService,
    public dataLocal: DataLocalService
  ) {

    this.activatedRoute.data.subscribe(params => {

      this.form = this.formService.get('account-adm')
      this.loading = true;

    })
  }

  onSubmit() {
  }


  criarConta(req: any) {

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
  /*   this.dataAPI.httpApi('requisicaoDados').subscribe(
      (resposta: Iresponse<any>) => {
        console.log(resposta)
        return resposta
      }) */
  }

}