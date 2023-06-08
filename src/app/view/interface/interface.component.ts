import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    public breakpoint: BreakpointObserver,

  ) {
    this.router()
  }

  ngOnInit(): void {
    this.breakpointView()
    this.actions()
  }

  router() {

    return this.route.data.subscribe((data) => {

      const db = data['response']
      this.testDataBaseNoError(db)
      if (_debug.pg.interface) {
        console.log('Interface Sucess')
        console.log(this.i.data)
        console.log(db)
      }

      this.i.data.local.permission = db['permission']
      this.i.data.requestLast.user = db['user']
      this.i.data.user = db['user']
      /*  this.i.data.local.model = db['model'] */
    
      this.i.load.interface = true;
      this.i.load.document = false;
    })
  }

  breakpointView() {
    return this.breakpoint.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {

        const phone = this.breakpoint.isMatched('(max-width: 540.98px)')
        const destktop = this.breakpoint.isMatched('(min-width: 900px)');

        this.i.view.phone = phone
        this.i.view.tablet = phone == false && destktop == false
        this.i.view.desktop = destktop
      }
    });
  }

 

  actions() {

    this.i.actionsEmitter.subscribe(action => {

      switch (action) {

        case 'menu': {
          this.menu.toggle();
          break;
        }
        case 'document': {
          //Page Colection open/close Document
          break;
        }

        case 'documentOpen': {
            //Page Colection open/close Document
          break;
        }
        case 'documentClose': {
            //Page Colection open/close Document
          break;
        }
        case 'colectionAndDocClose': {
          this.i.load.colection = false;
          this.i.load.document = false;
          this.i.load.dashboard = false;
          break;
        }
        case 'documentClose': {
          //Page Colection open/close Document
          break;
        }

        default: {
          alert('Evento de Interface não Cadastrado: ' + action);
          console.log('Evento de Interface não Cadastrado: ' + action);
          break;
        }
      }
    });
  }
  testDataBaseNoError(db:any) {
    const error = db.error == undefined ? false : true
    error ? console.log('Erro Data Base' + db.erro ): ''
  return error
  }
}
