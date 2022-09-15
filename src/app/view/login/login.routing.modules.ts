import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';


const loginRoutes: Routes = [
  { path: 'en/login', component:LoginIndexComponent },
  {
    path: 'en/login/sign-in', component: LoginSignInComponent,
    
    children: [
      { path: '', component: LoginSignInComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action', component: LoginSignInComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action/:item', component: LoginSignInComponent, resolve: { 'request': DataLocalResolver}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
