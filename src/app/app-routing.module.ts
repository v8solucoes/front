import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DataLocalResolver } from './resolve/data-local.resolver';
import { GetUserResolver } from './resolve/get-user.resolver';

import { LoginSignInComponent } from '@view/login/login-sign-in/login-sign-in.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { InterfaceComponent } from '@view/interface/interface.component';
import { GetColectionResolver } from './resolve/get-colection.resolver';
import { DocumentComponent } from '@view/interface/04-document/document.component';
import { GetDocumentResolver } from './resolve/get-document.resolver';
import { CreateAccountComponent } from '@view/login/create-account/create-account.component';
import { ColectionComponent } from '@view/interface/03-colection/colection.component';
import { DashboardComponent } from '@view/interface/02-dashboard/dashboard.component';

const routes: Routes = [

  {
    path: ':language/login/:document', component: LoginSignInComponent,
    resolve: { 'request': DataLocalResolver },
  },
  {
    path: ':language/account/:document/:action', component: CreateAccountComponent,
    resolve: { 'request': DataLocalResolver },
  },

  {
    path: ':language/app', component: InterfaceComponent,
    canActivate: [AuthGuard],
    resolve: { 'response': GetUserResolver },
   /*  resolve: { 'response': () => inject(GetUserResolver).resolve()}, */
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: ':document', component: ColectionComponent,
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
