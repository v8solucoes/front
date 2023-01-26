import { FormValidateComponent } from './form-validate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FormValidateComponent
  ],
  
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class FormValidateModule { }
