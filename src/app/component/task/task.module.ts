import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';



@NgModule({
  declarations: [
    TaskComponent
  ],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
