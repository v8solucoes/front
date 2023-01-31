import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '@component/settings/settings.component';
import { PageNotFoundComponent } from '@view/page-not-found/page-not-found.component';

import { ActionComponent } from '@component/action/action.component';
import { MaterialDesignModule } from '@shared-angular/material-design.module';

@NgModule({
  declarations: [
    ActionComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  exports: [
    SettingsComponent,
    ActionComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialDesignModule,
  ]
})
export class ComponentSharedModule { }
