import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppV8RoutingModule } from './app-v8.routing.module';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';
import { FormModule } from '@component/form/form.module';

import { InterfaceComponent } from './interface/interface.component';


@NgModule({
  declarations: [
    InterfaceComponent
  ],
  imports: [
    CommonModule,
    AppV8RoutingModule,
    MaterialDesignModule,
    FormModule,
  ]
})
export class AppV8Module { }
