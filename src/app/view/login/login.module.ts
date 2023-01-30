import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from 'src/app/shared/module/material-design.module';
import { FormModule } from '@component/form/form.module';
import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginSignInComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    MaterialDesignModule,
    AppRoutingModule,
    ComponentSharedModule
  ]
})
export class LoginModule { }
