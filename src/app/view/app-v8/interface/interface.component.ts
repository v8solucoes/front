import { Component, OnInit, ViewChild } from '@angular/core';
import { InterfaceService } from '../interface.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { _debug } from '../../../../../../domain/src/domain/repository/debug';
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
  router() {
    return this.inscription = this.route.data.subscribe((data) => {

      const db = data['response']
   
    this.i.data.local.permission = db['permission']['adm']
    this.i.data.local.model = db['model']
    this.i.data.requestLast.user = db['user']
      this.i.data.user = db['user']
      
      if (_debug.pg.interface) {
        console.log('Interface Sucess')
        console.log(this.i.data.requestLast)
      }

    this.load = true
  }) }
  actions() {

    this.i.actionsEmitter.subscribe(action => {

      switch (action) {

        case 'menu': { this.menu.toggle(); break; }
        case 'document': { this.document.toggle(); break; }
        case 'documentCloset': { break; }
        case 'documentOpen': { break; }
        case 'documentColection': { this.i.loadingDocument= true ; break; }

        default: {
        /*   alert('Evento de Interface não Cadastrado: ' + action);
          console.log('Evento de Interface não Cadastrado: ' + action); */
          break;
        }
      }
    });
  }

}
