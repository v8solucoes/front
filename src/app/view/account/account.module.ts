import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/shared/module/material-design.module';
import { AccountRoutingModule } from './account.routing.module';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { FormModule } from '@component/form/form.module';

@NgModule({
  declarations: [
    AccountIndexComponent,
    AccountCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AccountRoutingModule,
    FormModule
  ]
})
export class AccountModule { }
