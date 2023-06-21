import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCreateComponent } from './menu-create.component';
import { MaterialDesignModule } from '@shared-angular/material-design.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MenuCreateComponent
  ],
  exports: [
    MenuCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AppRoutingModule,
  ]
})
export class MenuCreateModule { }
