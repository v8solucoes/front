import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './../../component/settings/settings.module';
import { LoginRoutingModule } from './login.routing.modules';
import { MaterialDesignModule } from 'src/app/shared/module/material-design.module';
import { FormModule } from '@component/form/form.module';
import { ActionModule } from '@view/app-v8/document/action/action.module';

import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';

@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginSignInComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
    LoginRoutingModule,
    MaterialDesignModule,
    ActionModule,
    SettingsModule
  ]
})
export class LoginModule { }
