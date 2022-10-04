import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { GetColectionResolver } from 'src/app/resolve/get-colection.resolver';
import { GetUserResolver } from 'src/app/resolve/get-user.resolver';
import { ColectionIndexComponent } from './colection/colection-index/colection-index.component';
import { InterfaceComponent } from './interface/interface.component';


const appV8Routes: Routes = [

  {
    path: 'en/app', component: InterfaceComponent,
    canActivate: [AuthGuard],
    resolve: { 'request': GetUserResolver},
    children: [
      {
        path: ':document', component: ColectionIndexComponent,
        canActivate: [AuthGuard],
        resolve: { 'request': GetColectionResolver }
      },
/*       { path: ':document/:action', component: InterfaceComponent},
      { path: ':document/:action/:id', component: InterfaceComponent}, */
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
