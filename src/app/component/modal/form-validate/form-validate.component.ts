import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ImodalErrorForm } from '@domain/interface';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  text = {
    en: {
      title: 'Please, correct fields!',
      buttom: 'Correct'
    },
    pt: {
      title: 'Por Favor, corrija os campos!',
      buttom: 'Corrigir'
    }
  }
  
  constructor(

    public dialogRef: MatDialogRef<FormValidateComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ImodalErrorForm  
  ) {  }

  ngOnInit(): void {
  }

}
