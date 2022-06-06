import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValueComponent } from '@component/form/form-value/form-value.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { InputGenerecComponent } from './input-type/input-generec/input-generec.component';
import { MaterialDesign } from '@shared-angular/module/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGenerecErrorComponent } from './input-type/input-generec-error/input-generec-error.component';
import { FormMaskDirective } from './form-mask.directive';
import { FormPipePipe } from './form-pipe.pipe';

@NgModule({
  declarations: [
    FormGroupComponent,
    FormValueComponent,
    FormArrayComponent,
    InputGenerecComponent,
    InputGenerecErrorComponent,
    FormMaskDirective,
    FormPipePipe,
  ],
  exports: [
    FormGroupComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesign,
    
  ]
})
export class FormModule { }
