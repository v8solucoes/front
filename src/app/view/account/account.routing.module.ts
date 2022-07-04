import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@view/page-not-found/page-not-found.component';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountIndexComponent } from './account-index/account-index.component';

const accountRoutes: Routes = [
  {
    path: 'en/account', component: AccountIndexComponent,
    children: [
      { path: ':document/:action', component: AccountCreateComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':document/:action/:item', component: AccountCreateComponent, resolve: { 'request': DataLocalResolver}},
      { path: '**', component: PageNotFoundComponent}
    ]
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
