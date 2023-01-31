import { NgModule } from '@angular/core';
import { ActionComponent } from './action.component';
/* import { MaterialDesignModule } from '@shared-angular/module/material-design.module'; */
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ActionComponent
  ],
  imports:[CommonModule],
  exports: [
    ActionComponent,
  ]
})
export class ActionModule { }