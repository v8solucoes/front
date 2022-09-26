import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

const routes: Routes = [
   /*  { path: '', pathMatch: 'full', redirectTo:'en/login/sign-in' }, */
/*     { path: '', pathMatch: 'full', redirectTo:'en/account/account-adm/create' }, */
    { path: '', pathMatch: 'full', redirectTo:'en/login/sign-in' },
    { path: '**', component: PageNotFoundComponent },
  /*   { path: 'login/:tipo', component: LoginComponent },
    { path: 'interface', 
      canActivate:[AutenticarGuard],
      resolve:{ 'usuario': AutenticarResolver},
      component: InterfaceComponent 
    }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
