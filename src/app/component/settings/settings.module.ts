import { MaterialDesignModule } from './../../shared/module/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialDesignModule,
  ]
})
export class SettingsModule { }
