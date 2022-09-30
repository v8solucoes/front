import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColectionGroupComponent } from './colection-group/colection-group.component';
import { ColectionValueComponent } from './colection-value/colection-value.component';



@NgModule({
  declarations: [
    ColectionGroupComponent,
    ColectionValueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColectionGroupComponent
  ]
})
export class ColectionModule { }
