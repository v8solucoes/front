import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendencyComponent } from './pendency.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { TaskModule } from '@component/task/task.module';

@NgModule({
  declarations: [
    PendencyComponent,
  ],
  exports: [PendencyComponent],
  imports: [
    CommonModule,
    TaskModule,
    MatCheckboxModule,
    FormsModule,
  ],
})
export class PendencyModule { }
