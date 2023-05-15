import { FormValidateComponent } from './form-validate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

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
