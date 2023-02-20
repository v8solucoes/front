import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InterfaceService } from '@view/interface/interface.service';
import { _debug } from '@repositoryDomain/debug';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  @ViewChild('menu') menu: any;
  @ViewChild('document') document: any;
  
/*   load = false */
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    public layout: BreakpointObserver,

  ) { 

    this.layout.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {

        const phone = layout.isMatched('(max-width: 540.98px)')
        const destktop = layout.isMatched('(min-width: 900px)');

        this.i.view.phone = phone
        this.i.view.tablet = phone == false && destktop == false
        this.i.view.desktop = destktop
          /*    console.log(this.i.view) */
      }
    });
  }

  ngOnInit(): void {
    this.router()
    this.actions()
  }
  router() {

    return this.inscription = this.route.data.subscribe((data) => {
      
      const db = data['response']
     /*  console.log(db) */

      this.i.data.local.permission.adm = db['permission']['adm']
     /*  this.i.data.local.model = db['model'] */
      this.i.data.requestLast.user = db['user']
      this.i.data.user = db['user']

      if (_debug.pg.interface) {
        console.log('Interface Sucess')
        console.log(this.i.data.requestLast)
      }

    })
  }


  actions() {

    this.i.actionsEmitter.subscribe(action => {

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
