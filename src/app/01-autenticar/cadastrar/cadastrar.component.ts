import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovaConta } from 'src/app/02-dados/inteface';
import { AutenticarService } from '../autenticar.service';
import { WindowDom } from 'src/app/dom/window.dom';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequisicaoDados } from '../../../../../biblioteca-v8/src/construtor/11-credencial/credencial.interface';
import { Modulo } from '../../../../../biblioteca-v8/src/construtor/16-export/interface.export';
import { Resposta } from '../../../../../biblioteca-v8/src/construtor/14-resposta/resposta.interface';
import { DadosService } from 'src/app/02-dados/dados.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  rota = {} as NovaConta;
  exibir = true;
  incrementa = 1

  aleatorio = new Date().getSeconds()

  public cadastro = new FormGroup({
    nome: new FormControl('Emerson', Validators.required),
    email: new FormControl(`teste@v8sites.com.br`, [Validators.required, Validators.email]),
    telefone: new FormControl('1111111', Validators.required),
    cpf: new FormControl('283.0000.00-14', Validators.required),
    senha: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('123456', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private routerAtivo: ActivatedRoute,
    private router: Router,
    public autenticar: AutenticarService,
    public dados: DadosService,
/*     private Location:Location, */
    public windowDom: WindowDom
  ) {
   }

  ngOnInit(): void {

    this.routerAtivo.params.subscribe(params => {
      
     
      this.rota = {
        tipoAcesso: params['tipoAcesso'],
        idItem: params['idItem'],
        dominio: this.windowDom.nativeWindow.location.hostname
      }

    })
  }

  onSubmit() {
    this.criarConta(this.rota)
  }

  voltarLogin() {
    this.router.navigate(['login']);
/*     this.Location.back() */
  }

  criarConta(req: NovaConta) {
    
    this.incrementa ++
    this.cadastro.get('email')?.setValue(`contato.0${this.incrementa}@v8sites.com.br`)

    const dados: Modulo['conta'] = {
      'cpf': this.cadastro.get('nome')?.value,
      'email': this.cadastro.get('email')?.value,
      'nome': this.cadastro.get('nome')?.value,
      'senha': this.cadastro.get('senha')?.value,
      'telefone': this.cadastro.get('telefone')?.value,
    }

    const requisicaoDados: RequisicaoDados = {
      credencial: {
        usuario: {
          id_usuario: "semUsuario"
          , id_revenda: "semUsuario"
          , id_cliente: "semCliente"
          , tipoAcesso: req.tipoAcesso
        }
        , requisicao: {
          ambiente: "ambienteTesteV8"
          , idModulo: 'conta-adm'
          , idItem: req.idItem
          , acao: "set"
          , funcao: "criarAutenticacao"
          , dominio: req.dominio
          , dataUpdate: new Date()
          , dataCriacao: new Date()
        },
      },
      dados
    }

    this.dados.httpApi(requisicaoDados).subscribe(
      (resposta: Resposta<any>) => {
        console.log(resposta)
        return resposta
      })
  }

}
