import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { PasswordComponent } from './input-type/password/password.component';
import { MaterialDesignModule } from '@shared-angular/material-design.module';

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
    PasswordComponent,
  ],
  exports: [
    FormGroupComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MaterialDesignModule
  ]
})
export class FormModule { }
