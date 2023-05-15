import { ImodalErrorForm } from '@domain/interface';
import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FormValidateComponent } from './form-validate/form-validate.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialogo: MatDialog
  ) { }

  modalErrorForm(config: ImodalErrorForm): void {

    const { error, model, width, language } = config

    const dialogRef = this.dialogo.open(FormValidateComponent, {
      width,
      data: {error, model, language},
    });

   /*  dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
    }); */
  }
}
