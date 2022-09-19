import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppV8RoutingModule } from './app-v8.routing.module';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { FormModule } from '@component/form/form.module';

import { InterfaceComponent } from './interface/interface.component';
import { MenuIndexComponent } from './menu/menu-index/menu-index.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuAdmComponent } from './menu/menu-adm/menu-adm.component';


@NgModule({
  declarations: [
    InterfaceComponent,
    MenuIndexComponent,
    MenuTopComponent,
    MenuAdmComponent
  ],
  imports: [
    CommonModule,
    AppV8RoutingModule,
    MaterialDesignModule,
    FormModule,
  ]
})
export class AppV8Module { }
