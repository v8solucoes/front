import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountIndexComponent } from './account-index/account-index.component';

const accountRoutes: Routes = [

  { path: 'en/account', component:AccountIndexComponent},
  {
    path: 'en/account/account-adm', component: AccountCreateComponent,
    
    children: [
      { path: '', component: AccountCreateComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action', component: AccountCreateComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action/:item', component: AccountCreateComponent, resolve: { 'request': DataLocalResolver}},
    ]
  }
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
