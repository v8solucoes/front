import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppV8RoutingModule } from './app-v8.routing.module';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { FormModule } from '@component/form/form.module';

import { InterfaceComponent } from './interface/interface.component';
import { MenuIndexComponent } from './menu/menu-index/menu-index.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuAdmComponent } from './menu/menu-adm/menu-adm.component';
import { ColectionIndexComponent } from './colection/colection-index/colection-index.component';
import { ColectionModule } from '@component/colection/colection.module';
import { DocumentComponent } from './document/document.component';
import { ActionModule } from './document/action/action.module';

@NgModule({
  imports: [
    CommonModule,
    AppV8RoutingModule,
    MaterialDesignModule,
    FormModule,
    ColectionModule,
    ActionModule
  ],
  declarations: [
    InterfaceComponent,
    MenuIndexComponent,
    MenuTopComponent,
    MenuAdmComponent,
    ColectionIndexComponent,
    DocumentComponent,
  ],

 
})
export class AppV8Module { }
