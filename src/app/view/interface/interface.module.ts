import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '@component/form/form.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { ColectionModule } from '@component/colection/colection.module';

import { InterfaceComponent } from './interface.component';

import { MenuAdmComponent } from './menu/menu-adm/menu-adm.component';
import { ColectionIndexComponent } from './colection/colection-index/colection-index.component';
import { DocumentComponent } from './document/document.component';
import { MaterialDesignModule } from '@shared-angular/material-design.module';
import { MenuFooterComponent } from './menu/menu-footer/menu-footer.component';
import { MenuNavComponent } from './menu/menu-nav/menu-nav.component';
import { MenuHeaderComponent } from './menu/menu-header/menu-header.component';
import { MenuComponent } from './menu/menu.component';
import { ColectionComponent } from './colection/colection.component';
import { ColectionNavComponent } from './colection/colection-nav/colection-nav.component';
import { ColectionHeaderComponent } from './colection/colection-header/colection-header.component';
import { ColectionFooterComponent } from './colection/colection-footer/colection-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';


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
    MenuNavComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    ColectionComponent,
    ColectionNavComponent,
    ColectionHeaderComponent,
    ColectionFooterComponent,

    MenuAdmComponent,
    ColectionIndexComponent,
    DocumentComponent,
    ColectionComponent,
    ColectionNavComponent,
    ColectionHeaderComponent,
    ColectionFooterComponent,
    DashboardComponent,
    DashboardNavComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
