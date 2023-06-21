import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message.component';
import { MaterialDesignModule } from '@shared-angular/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SendMessageComponent],
  exports: [SendMessageComponent],
  imports: [
    MaterialDesignModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SendMessageModule { }
