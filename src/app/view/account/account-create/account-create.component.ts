import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService, IFormData } from '@component/form/form.service';
import { IrequestData, Iresponse } from '@shared-library/interface';
import { WindowDom } from 'src/app/method/window.dom';
import { DataAPI } from 'src/app/repository/data.API';

import { Iconta, InewAccount } from './account-create.interface';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
  
export class AccountCreateComponent implements OnInit {

  rota = {} as InewAccount;
  exibir = true;
  incrementa = 1;
  formData: IFormData;

  constructor(
    private routerAtivo: ActivatedRoute,
    public dataAPI: DataAPI,
    public windowDom: WindowDom,
    public form: FormService
  ) 
  {
    this.formData = this.form.exe()

  /*   console.log(this.formData.form) */
  }

  ngOnInit(): void {

    this.routerAtivo.params.subscribe(params => {

      this.rota = {
        accessType: params['type'],
        itemId:'teesadf',
        domain: this.windowDom.nativeWindow.location.hostname
      }

    })
  }

  onSubmit() {
    this.criarConta(this.rota)
  }
  

  criarConta(req: InewAccount) {

    this.incrementa++
    const form = this.formData.form

    form.get('email')?.setValue(`contato.0${this.incrementa}@v8sites.com.br`)

    const dados: Iconta = {
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

    this.dataAPI.httpApi(requisicaoDados).subscribe(
      (resposta: Iresponse<any>) => {
        console.log(resposta)
        return resposta
      })
  }

}