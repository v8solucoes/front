import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DataLocalResolver } from './resolve/data-local.resolver';
import { GetUserResolver } from './resolve/get-user.resolver';

import { LoginIndexComponent } from '@view/login/login-index/login-index.component';
import { LoginSignInComponent } from '@view/login/login-sign-in/login-sign-in.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { InterfaceComponent } from '@view/interface/interface.component';
import { ColectionIndexComponent } from '@view/interface/colection/colection-index/colection-index.component';
import { GetColectionResolver } from './resolve/get-colection.resolver';
import { DocumentComponent } from '@view/interface/document/document.component';
import { GetDocumentResolver } from './resolve/get-document.resolver';
import { AccountIndexComponent } from '@view/account/account-index/account-index.component';
import { AccountCreateComponent } from '@view/account/account-create/account-create.component';

const routes: Routes = [

  {
    path: ':language/login', component: LoginIndexComponent,
  },
  {
    path: ':language/login/:document', component: LoginSignInComponent,
    resolve: { 'request': DataLocalResolver },
  },
  {
    path: ':language/account', component: AccountIndexComponent,
  },
  {
    path: ':language/account/:document/:action', component: AccountCreateComponent,
    resolve: { 'request': DataLocalResolver },
  },
  {
    path: ':language/app', component: InterfaceComponent,
    canActivate: [AuthGuard],
    resolve: { 'response': GetUserResolver },
    children: [
      {
        path: ':document', component: ColectionIndexComponent,
        canActivate: [AuthGuard],
        resolve: { 'response': GetColectionResolver },
        children: [
          {
            path: ':id/:action', component: DocumentComponent,
            canActivate: [AuthGuard],
            resolve: { 'response': GetDocumentResolver }
          }
        ]
      },
    ]
  },

  { path: '', pathMatch: 'full', redirectTo: 'en/login/sign-in' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
