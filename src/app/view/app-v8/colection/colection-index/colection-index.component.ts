import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icol, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';
import { Subscription } from 'rxjs';
import { _debug } from '../../../../../../../domain/src/domain/repository/debug';

@Component({
  selector: 'app-colection-index',
  templateUrl: './colection-index.component.html',
  styleUrls: ['./colection-index.component.scss']
})
export class ColectionIndexComponent implements OnInit {
 
 @ViewChild('document') document: any;
  load = false
  colections!: Icol
  inscription!: Subscription

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 

    this.inscription = this.route.data.subscribe(({ response }) => {
      
      if (_debug.pg.document) {
        console.log('Colection')
      }

      this.i.data.local.colection[`${this.i.data.requestLast.document}`] = response

      this.load = true

    })
    this.actions()

  }
  ngOnInit(): void { }

  actions() {

    this.i.actionsEmitter.subscribe(action => {

      switch (action) {
        case 'document': { this.document.toggle(); break; }
        case 'documentCloset': { this.document.toggle(false); break; }
        case 'documentOpen': { this.document.toggle(true); break; }
        case 'documentColection': { this.i.loadingDocument= true ; break; }

        default: {
          alert('Evento de Interface não Cadastrado: ' + action);
          console.log('Evento de Interface não Cadastrado: ' + action);
          break;
        }
      }
    });
  }

}
