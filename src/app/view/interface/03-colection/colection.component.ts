import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _debug } from '@repositoryDomain/debug';
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

  loading = false

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    ) { 
 
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(param=> {
 
      if(param['subColection']) {
        let paramIsNull = param['subColection'] ? param['subColection'] : 'null'
        this.i.data.subColectionIsTrue = paramIsNull == 'null' ? false : true
        this.i.data.subColectionName = paramIsNull
        this.i.data.subColectionOrName = paramIsNull == 'null' 
        ? this.i.data.documentName :  this.i.data.subColectionName
        this.loading = true
/*         console.log('Query Parms')
        console.log(this.i.data.subColectionIsTrue +' / ' + paramIsNull) */
      }
      
    })

    this.actions()
  
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
        case 'documentOpen': {
          this.document.toggle(true);
          break;
        }
        case 'documentClose': {
          this.document.toggle(false);
          break;
        }
        case 'colectionAndDocClose': {
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
