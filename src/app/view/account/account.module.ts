import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/module/material-design.module';
import { FormModule } from '@component/form/form.module';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AccountIndexComponent,
    AccountCreateComponent
  ],
  imports: [
    CommonModule,
/*     AccountRoutingModule, */
    MaterialDesignModule,
    ComponentSharedModule,
    FormModule,
    AppRoutingModule,
  ]
})
export class AccountModule { }
