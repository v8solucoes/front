import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './../../shared/module/material-design.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  exports: [],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialDesignModule,
  ]
})
export class SettingsModule { }
