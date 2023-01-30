import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountIndexComponent } from './account-index/account-index.component';

const accountRoutes: Routes = [
// EN
  {
    path: 'en/account', component: AccountIndexComponent,
  },
  {
    path: 'en/account/:document/:action', component: AccountCreateComponent,
    resolve: { 'request': DataLocalResolver },
  },
  //PT
  {
    path: 'pt/account', component: AccountIndexComponent,
  },
  {
    path: 'pt/account/:document/:action', component: AccountCreateComponent,
    resolve: { 'request': DataLocalResolver },
  },

];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
