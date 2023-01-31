import { BackandService } from '@repository/backand.service';
import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from '@repository/data.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { ModalService } from '@component/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  actionsEmitter = new EventEmitter<'menu' | 'document' | 'documentColection' | 'documentCloset'| 'documentOpen'>();
  loading = false;
  viewDocument = false;
  loadingDocument = false
  design = {
    menuScrollBarra: true,
    menuScrollUltimo: 0,
    moduloScrollBarra: true,
    moduloScrollUltimo: 0,
    opcoesFixar: false,
    telaTablet: false,
    telaCelular: false,
    telaDesktop: true,
    telaDesktopTablet: false,
    animaItem: true,
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
    this.loading = true
  }

}
