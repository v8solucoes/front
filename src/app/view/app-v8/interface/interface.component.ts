import { Component, OnInit, ViewChild } from '@angular/core';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  @ViewChild('menu') menu: any;
  @ViewChild('document') document: any;

  constructor(
    public i: InterfaceService
  ) { }

  ngOnInit(): void {

    this.actions()
  }
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
