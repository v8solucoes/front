import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DataLocalResolver } from 'src/app/resolve/data-local.resolver';
import { InterfaceComponent } from './interface/interface.component';


const appV8Routes: Routes = [

  {
    path: 'en/app/interface', component: InterfaceComponent,
    canActivate:[AuthGuard],
    
    children: [
      { path: '', component: InterfaceComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action', component: InterfaceComponent, resolve: { 'request': DataLocalResolver}},
      { path: ':action/:item', component: InterfaceComponent, resolve: { 'request': DataLocalResolver}},
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
