import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// OUTROS
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

// Modules
import { InterfaceModule } from '@view/interface/interface.module';
import { LoginModule } from '@view/login/login.module';
import { FormValidateModule } from '@component/modal/form-validate/form-validate.module';

// Components
import { AppComponent } from './app.component';
import { ComponentSharedModule } from './app.module.shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Not Remove
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormValidateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    // Personal App
    ComponentSharedModule,
    LoginModule,
    InterfaceModule,

  ],
  /*   schemas: [  CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA ], */

/*   providers: [WindowDom], */

  bootstrap: [AppComponent],
})
export class AppModule { }
