import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '@component/form/form.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { ColectionModule } from '@component/colection/colection.module';
import { MaterialDesignModule } from '@shared-angular/material-design.module';

import { InterfaceComponent } from './interface.component';

import { MenuComponent } from './01-menu/menu.component';
import { MenuNavTopComponent } from './01-menu/01-menu-nav-top/menu-nav-top.component';
import { MenuAdmComponent } from './01-menu/02-menu-adm/menu-adm.component';
import { MenuPartnerComponent } from './01-menu/03-menu-partner/menu-partner.component';
import { MenuClientComponent } from './01-menu/04-menu-client/menu-client.component';
import { MenuNavFooterComponent } from './01-menu/05-menu-nav-footer/menu-nav-footer.component';

import { DashboardComponent } from './02-dashboard/dashboard.component';
import { DashboardNavTopComponent } from './02-dashboard/03-dashboard-nav-top/dashboard-nav-top.component';
import { DashboardHeaderComponent } from './02-dashboard/02-dashboard-header/dashboard-header.component';
import { DashboardNavFooterComponent } from './02-dashboard/01-dashboard-nav-footer/dashboard-nav-footer.component';

import { ColectionComponent } from './03-colection/colection.component';
import { ColectionNavTopComponent } from './03-colection/01-colection-nav-top/colection-nav-top.component';
import { ColectionHeaderComponent } from './03-colection/02-colection-header/colection-header.component';
import { ColectionNavFooterComponent } from './03-colection/03-colection-nav-footer/colection-nav-footer.component';

import { DocumentComponent } from './04-document/document.component';
import { DocumentNavTopComponent } from './04-document/01-document-nav-top/document-nav-top.component';
import { DocumentHeaderComponent } from './04-document/02-document-header/document-header.component';
import { DocumentNavFooterComponent } from './04-document/03-document-nav-footer/document-nav-footer.component';
import { TaskComponent } from '@component/task/task.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormModule,
    AppRoutingModule,
    ColectionModule,
    ComponentSharedModule,
  ],
  declarations: [
    InterfaceComponent,

    MenuComponent,
    MenuNavTopComponent,
    MenuAdmComponent,
    MenuPartnerComponent,
    MenuClientComponent,
    MenuNavFooterComponent,
  
    DashboardComponent,
    DashboardNavTopComponent,
    DashboardHeaderComponent,
    DashboardNavFooterComponent,

    ColectionComponent,
    ColectionNavFooterComponent,
    ColectionHeaderComponent,
    ColectionNavTopComponent,

    DocumentComponent,
    DocumentNavTopComponent,
    DocumentHeaderComponent,
    DocumentNavFooterComponent,

    // Settings
    TaskComponent
 
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
