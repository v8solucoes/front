import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AppResolver } from 'src/app/resolve/app.resolver';
import { InterfaceComponent } from './interface/interface.component';


const appV8Routes: Routes = [

  {
    path: 'en/app', component: InterfaceComponent,
    canActivate: [AuthGuard],
    resolve: { 'request': AppResolver},
    children: [
      {
        path: ':document', component: InterfaceComponent,
        canActivate: [AuthGuard],
        resolve: { 'request': AppResolver}},
      { path: ':document/:action', component: InterfaceComponent},
      { path: ':document/:action/:id', component: InterfaceComponent},
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
  imports: [RouterModule.forChild(appV8Routes)],
  exports: [RouterModule]
})
export class AppV8RoutingModule { }
