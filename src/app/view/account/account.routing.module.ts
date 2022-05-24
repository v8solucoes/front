import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountNotFoundComponent } from './account-not-found/account-not-found.component';

const accountRoutes: Routes = [
  {
    path: 'account', component: AccountIndexComponent,
    children: [
      { path: 'create/:type', component: AccountCreateComponent },
      { path: '**', component: AccountNotFoundComponent }]
  },

  /*   { path: 'login/:tipo', component: LoginComponent },
    { path: 'interface', 
      canActivate:[AutenticarGuard],
      resolve:{ 'usuario': AutenticarResolver},
      component: InterfaceComponent 
    }, */
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
