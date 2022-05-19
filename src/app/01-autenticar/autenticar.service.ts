import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../02-dados/dados.service';
import { NovaConta } from '../02-dados/inteface';
import { Modulo, RequisicaoDados, Resposta } from '../05-compartilhado/app.interface';

@Injectable({
  providedIn: 'root'
})

export class AutenticarService {

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
    public dados: DadosService
  ) { }

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
