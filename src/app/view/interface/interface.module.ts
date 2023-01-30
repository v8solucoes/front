import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '@component/form/form.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentSharedModule } from 'src/app/app.module.shared';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { ColectionModule } from '@component/colection/colection.module';

import { InterfaceComponent } from './interface.component';
import { MenuIndexComponent } from './menu/menu-index/menu-index.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuAdmComponent } from './menu/menu-adm/menu-adm.component';
import { ColectionIndexComponent } from './colection/colection-index/colection-index.component';
import { DocumentComponent } from './document/document.component';


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
    MenuIndexComponent,
    MenuTopComponent,
    MenuAdmComponent,
    ColectionIndexComponent,
    DocumentComponent,
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
