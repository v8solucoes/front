import { Component, OnInit, ViewChild } from '@angular/core';
import { Animates } from '@shared-angular/animations';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-colection',
  templateUrl: './colection.component.html',
  styleUrls: ['./colection.component.scss'],
  animations:[Animates]
})
export class ColectionComponent implements OnInit {

  @ViewChild('document') document: any;

  constructor(public i: InterfaceService) { 
 
  }

  ngOnInit(): void {
   
    this.actions()
       this.i.load.colection = true;
  }
 
  actions() {

    this.i.actionsEmitter.subscribe(action => {

      switch (action) {

        case 'menu': {
          // Interface Component
          break;
        }
        case 'document': {
          this.document.toggle();
          break;
        }
        case 'colectionAndDocClose': {
         // Interface Component
          break;
        }
        case 'documentClose': {
          this.document.toggle(false);
          break;
        }
        default: {
          alert('Evento Document de Interface não Cadastrado: ' + action);
          console.log('Evento Document de Interface não Cadastrado: ' + action);
          break;
        }
      }
    });
  }
}
