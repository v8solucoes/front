import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '@component/form/form.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { ColectionModule } from '@component/colection/colection.module';
import { MaterialDesignModule } from '@shared-angular/material-design.module';

import { InterfaceComponent } from './interface.component';

import { MenuComponent } from './menu/menu.component';
import { MenuNavTopComponent } from './menu/menu-nav-top/menu-nav-top.component';
import { MenuAdmComponent } from './menu/menu-adm/menu-adm.component';
import { MenuNavFooterComponent } from './menu/menu-nav-footer/menu-nav-footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavTopComponent } from './dashboard/dashboard-nav-top/dashboard-nav-top.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardNavFooterComponent } from './dashboard/dashboard-nav-footer/dashboard-nav-footer.component';

import { ColectionComponent } from './colection/colection.component';
import { ColectionNavTopComponent } from './colection/colection-nav-top/colection-nav-top.component';
import { ColectionHeaderComponent } from './colection/colection-header/colection-header.component';
import { ColectionNavFooterComponent } from './colection/colection-nav-footer/colection-nav-footer.component';

import { DocumentComponent } from './document/document.component';
import { DocumentNavTopComponent } from './document/document-nav-top/document-nav-top.component';
import { DocumentHeaderComponent } from './document/document-header/document-header.component';
import { DocumentNavFooterComponent } from './document/document-nav-footer/document-nav-footer.component';


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
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
