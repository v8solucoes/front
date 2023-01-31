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
  
  load = false
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
  
        /*      console.log(result.breakpoints) */
  
        this.i.celullar = result.breakpoints['(max-width: 599.98px) and (orientation: portrait)']
        this.i.tablet =
           result.breakpoints['(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)']
        || result.breakpoints['(min-width: 840px) and (orientation: portrait)']
        || result.breakpoints['(max-width: 959.98px) and (orientation: landscape)']
        this.i.web =
             result.breakpoints['(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)']
          || result.breakpoints['(min-width: 1280px) and (orientation: landscape)']
        this.i.webAndTablet = this.i.tablet || this.i.web
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

      this.i.data.local.permission = db['permission']['adm']
      this.i.data.local.model = db['model']
      this.i.data.requestLast.user = db['user']
      this.i.data.user = db['user']

      if (_debug.pg.interface) {
        console.log('Interface Sucess')
        console.log(this.i.data.requestLast)
      }

      this.load = true
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
