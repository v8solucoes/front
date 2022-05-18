import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovaConta } from 'src/app/02-dados/inteface';
import { AutenticarService } from '../autenticar.service';
import { WindowDom } from 'src/app/dom/window.dom';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  rota = {} as NovaConta;
  exibir = true;

  constructor(
    private routerAtivo: ActivatedRoute,
    private router: Router,
    public autenticar: AutenticarService,
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
    this.autenticar.criarConta(this.rota)
  }

  voltarLogin() {
    this.router.navigate(['login']);
/*     this.Location.back() */
  }

}
