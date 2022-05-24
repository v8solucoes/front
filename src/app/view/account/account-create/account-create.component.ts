import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IrequestData, Iresponse } from '@shared-library/interface';
import { WindowDom } from 'src/app/method/window.dom';
import { DataAPI } from 'src/app/repository/data.API';

import { dados, Idados, Imodelo, Ipermissao, modelo, permissao} from '../../../repository/data-biblioteca-v8'
import { Iconta, InewAccount } from './account-create.interface';



@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
  
export class AccountCreateComponent implements OnInit {

  dados: Idados;
  modelo: Imodelo;
  permissao: Ipermissao[];

  rota = {} as InewAccount;
  exibir = true;
  incrementa = 1;
  cadastro = new FormGroup({
    nome: new FormControl('Emerson', Validators.required),
    email: new FormControl(`teste@v8sites.com.br`, [Validators.required, Validators.email]),
    telefone: new FormControl('1111111', Validators.required),
    cpf: new FormControl('283.0000.00-14', Validators.required),
    senha: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('123456', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private routerAtivo: ActivatedRoute,
    public dataAPI: DataAPI,
    public windowDom: WindowDom,
  ) 
  { 
    this.dados = dados
    this.modelo = modelo
    this.permissao = permissao
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

    this.cadastro.get('email')?.setValue(`contato.0${this.incrementa}@v8sites.com.br`)

    const dados: Iconta = {
      'cpf': this.cadastro.get('nome')?.value,
      'email': this.cadastro.get('email')?.value,
      'nome': this.cadastro.get('nome')?.value,
      'senha': this.cadastro.get('senha')?.value,
      'telefone': this.cadastro.get('telefone')?.value,
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