import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesign } from 'src/app/shared/module/material-design.module';
import { AccountRoutingModule } from './account.routing.module';
import { FormModule } from '@component/form/form.module';

import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';


@NgModule({
  declarations: [
    AccountIndexComponent,
    AccountCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    AccountRoutingModule,
    FormModule,
  ]
})
export class AccountModule { }
