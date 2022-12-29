import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icol, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colection-index',
  templateUrl: './colection-index.component.html',
  styleUrls: ['./colection-index.component.scss']
})
export class ColectionIndexComponent implements OnInit {
 
 @ViewChild('document') document: any;
  load = false
  doc: Irequest['document']
  colections!: Icol
  inscription!: Subscription
  view: boolean = true;

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute

  ) { 
    this.doc = this.i.data.requestLast.document

  }
  destroy() {
    return this.i.viewDocument = false
  }

  ngOnInit(): void {

    console.log('Colection')

    this.inscription = this.route.data.subscribe((colection) => {

     this.i.data.local.colection[`${this.doc}`] = colection['response']
     /*  console.log(this.get) */
      this.load = true
      this.view = false
   /*    setTimeout(() => {

        this.view = true

      }, 500); */
    })
    this.actions()

  }

  actions() {

    this.i.actionsEmitter.subscribe(action => {
    /*   this.i.auth.onAuthState() */
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
