import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FormMaskDirective } from './form-mask.directive';
import { FormPipePipe } from './form-pipe.pipe';

import { InputGenerecErrorComponent } from './input-type/input-generec-error/input-generec-error.component';
import { InputGenerecComponent } from './input-type/input-generec/input-generec.component';
import { FormValueComponent } from '@component/form/form-value/form-value.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { AcceptTermsComponent } from './input-type/accept-terms/accept-terms.component';
import { BooleanToggleComponent } from './input-type/boolean-toggle/boolean-toggle.component';
import { FormErrorComponent } from './form-error/form-error.component'

@NgModule({
  declarations: [
    FormGroupComponent,
    FormValueComponent,
    FormArrayComponent,
    InputGenerecComponent,
    InputGenerecErrorComponent,
    FormMaskDirective,
    FormPipePipe,
    AcceptTermsComponent,
    BooleanToggleComponent,
    FormErrorComponent,
  ],
  exports: [
    FormGroupComponent,
    FormErrorComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MaterialDesignModule
  ]
})
export class FormModule { }
