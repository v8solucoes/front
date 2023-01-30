import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '@component/form/form.module';
import { ColectionModule } from '@component/colection/colection.module';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { AppV8RoutingModule } from './app-v8.routing.module';

import { InterfaceComponent } from './interface/interface.component';
import { MenuIndexComponent } from '../interface/menu/menu-index/menu-index.component';
import { MenuTopComponent } from '../interface/menu/menu-top/menu-top.component';
import { MenuAdmComponent } from '../interface/menu/menu-adm/menu-adm.component';
import { ColectionIndexComponent } from '../interface/colection/colection-index/colection-index.component';
import { DocumentComponent } from './document/document.component';
import { ActionModule } from './document/action/action.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormModule,
    ColectionModule,
    ActionModule,
    ComponentSharedModule,
    AppV8RoutingModule,
  ],
  declarations: [
    InterfaceComponent,
    MenuIndexComponent,
    MenuTopComponent,
    MenuAdmComponent,
    ColectionIndexComponent,
    DocumentComponent,
  ],
  exports: [InterfaceComponent]

})
export class AppV8Module { }
