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

    MenuAdmComponent,
    ColectionIndexComponent,
    DocumentComponent,
    MenuFooterComponent,
    MenuNavComponent,
    MenuHeaderComponent,
    MenuComponent,
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
