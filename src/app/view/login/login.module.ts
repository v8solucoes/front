import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from 'src/app/shared/material-design.module';
import { FormModule } from '@component/form/form.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';
import { CreateAccountComponent } from '@view/login/create-account/create-account.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
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
