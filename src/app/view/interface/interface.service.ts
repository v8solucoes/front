import { BackandService } from '@repository/backand.service';
import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { ModalService } from '@component/modal/modal.service';
import { _debug } from '@repositoryDomain/debug';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
 
  actionsEmitter: EventEmitter<'menu' | 'document' | 'documentClose' | 'documentOpen' | 'colectionAndDocClose' | 'documentClose'> = new EventEmitter();
 
  load = {
    menu: false,
    colection: false,
    document: false,
    dashboard: true,
    interface: false,
  }

  document = {
    name: ''
  }

  debug = _debug
  viewDocument = false;
  loadingDocument = false
 
  view = {
    phone: false,
    tablet: false,
    desktop: false
  }

  animate = {
    navMenu: {
      animate: true,
      scrollLast: 0
    },
    navColection: {
      animate: true,
      scrollLast: 0
    },
    navDashboard: {
      animate: true,
      scrollLast: 0
    },

  };
  designUser = {
    tema: 'pad-tema-black',
    temaFonte: 0,
    iniciarMenuFixo: true,
  };
  constructor(
    public data: DataService,
    public modal: ModalService,
    public backand: BackandService,
    public auth: FirebaseAuthService
  ) {

    this.load.menu = true

  }

  startAnimation(evento: any, nameScroll: 'navMenu' | 'navColection'| 'navDashboard') {
    const scrollCurrent = evento.srcElement.scrollTop;
    const scrollLast = this.animate[nameScroll].scrollLast
    const compare = ()=> scrollLast > scrollCurrent ? true : false

    this.animate[nameScroll].scrollLast = scrollCurrent
    this.animate[nameScroll].animate = compare()

  }

  dashboardOpen() {
    this.load.dashboard = true
  }
  
  dashboardClose() {
    this.load.dashboard = false
  }
}
