import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { GetColectionResolver } from 'src/app/resolve/get-colection.resolver';
import { GetDocumentResolver } from 'src/app/resolve/get-document.resolver';
import { GetUserResolver } from 'src/app/resolve/get-user.resolver';
import { ColectionIndexComponent } from './colection/colection-index/colection-index.component';
import { DocumentComponent } from './document/document.component';
import { InterfaceComponent } from './interface/interface.component';


const appV8Routes: Routes = [

  {
    path: 'en/app', component: InterfaceComponent,
    canActivate: [AuthGuard],
    resolve: { 'response': GetUserResolver},
    children: [
      {
        path: ':document', component: ColectionIndexComponent,
        canActivate: [AuthGuard],
        resolve: { 'response': GetColectionResolver },
        children: [
          {
            path: ':action/:id', component: DocumentComponent,
            canActivate: [AuthGuard],
            resolve: { 'response': GetDocumentResolver }
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appV8Routes)],
  exports: [RouterModule]
})
export class AppV8RoutingModule { }
