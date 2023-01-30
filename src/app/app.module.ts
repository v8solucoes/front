import { NgModule } from '@angular/core';
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

// Components
import { InterfaceModule } from '@view/interface/interface.module';
import { FormValidateModule } from '@component/modal/form-validate/form-validate.module';
import { ComponentSharedModule } from './app.module.shared';
import { AppComponent } from './app.component';
import { AccountModule } from '@view/account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormValidateModule,
    // correct sequency Router URL Acess

    LoginModule,
    AccountModule,
    InterfaceModule,
    ComponentSharedModule,
    AppRoutingModule,

  ],
  /*   schemas: [  CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA ], */

  providers: [WindowDom],

  bootstrap: [AppComponent],
})
export class AppModule { }
