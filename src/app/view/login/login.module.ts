import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/module/material-design.module';
import { FormModule } from '@component/form/form.module';
import { LoginRoutingModule } from './login.routing.modules';

import { LoginIndexComponent } from './login-index/login-index.component';

@NgModule({
  declarations: [
    LoginIndexComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    LoginRoutingModule,
    MaterialDesignModule,
  ]
})
export class LoginModule { }
