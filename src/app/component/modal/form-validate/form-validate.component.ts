import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
