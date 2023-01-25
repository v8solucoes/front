import { ActionModule } from './view/app-v8/document/action/action.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// OUTROS
import { WindowDom } from './method/window.dom';
import { environment } from 'src/environments/environment';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';

// Modules
import { LoginModule } from '@view/login/login.module';
import { AppV8Module } from '@view/app-v8/app-v8.module';
import { AccountModule } from './view/account/account.module';
import { MaterialDesignModule } from '@shared-angular/module/material-design.module';

// Components
import { AppComponent } from './app.component';
import { ActionComponent } from './view/app-v8/document/action/action.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { TermsComponent } from './view/terms/terms.component';
import { FormValidateComponent } from './component/modal/form-validate/form-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TermsComponent,
    FormValidateComponent
],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccountModule,
    LoginModule,
    AppV8Module,
    AppRoutingModule,
    ActionModule,
    MaterialDesignModule,
  ],
  schemas: [  CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ],

  exports: [ ActionComponent ],

  providers: [ WindowDom ],

  bootstrap: [AppComponent],
})
export class AppModule {}
