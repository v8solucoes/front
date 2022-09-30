import { Component, OnInit, ViewChild } from '@angular/core';
import { InterfaceService } from '../interface.service';
import { map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  @ViewChild('menu') menu: any;
  @ViewChild('document') document: any;
  load = false
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,

  ) { 

    
  }

  ngOnInit(): void {
    this.router()
    this.actions()
  }
  router(){ return this.inscription = this.route.data.subscribe((o) => {
 
    this.i.data.permission = o['request']['permission']
    this.i.data.model = o['request']['model']
    this.i.data.requestLast.user = o['request']['user']
    this.i.data.user = o['request']['user']
    console.log('Interface Sucess')
    console.log(this.i.data.requestLast)
    this.load = true
  }) }
  actions() {

    this.i.actionsEmitter.subscribe(action => {
    /*   this.i.auth.onAuthState() */
      switch (action) {

        case 'menu': { this.menu.toggle(); break; }
        case 'document': { this.document.toggle(); break; }

        default: {
          alert('Evento de Interface não Cadastrado: ' + action);
          console.log('Evento de Interface não Cadastrado: ' + action);
          break;
        }
      }
    });
  }

}
