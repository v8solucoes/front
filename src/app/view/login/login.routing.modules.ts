import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { LoginIndexComponent } from './login-index/login-index.component';


const loginRoutes: Routes = [
  {
    path: 'en/login', component: LoginIndexComponent,
    children: [
      { path: ':document/:action', component: LoginIndexComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':document/:action/:item', component: LoginIndexComponent, resolve: { 'request': DataLocalResolver}},
    ]
  },
  { path: 'pt/login', component: LoginIndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
