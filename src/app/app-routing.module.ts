import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent } from './00-pagina/criar-conta/criar-conta.component';
import { IndexComponent } from './00-pagina/index/index.component';
import { PaginaNaoEncontradaComponent } from './07-componente/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: IndexComponent },
    { path: 'criar-conta/:tipoAcesso', component: CriarContaComponent },
    { path: '**', component: PaginaNaoEncontradaComponent },
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
