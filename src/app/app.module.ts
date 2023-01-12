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

// My Modules
import { LoginModule } from '@view/login/login.module';
import { AppV8Module } from '@view/app-v8/app-v8.module';
import { AccountModule } from './view/account/account.module';
// COMPONENTES
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { TermsComponent } from './view/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TermsComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccountModule,
    LoginModule,
    AppV8Module,
    AppRoutingModule
  ],

  providers: [ WindowDom ],

  bootstrap: [AppComponent],
})
export class AppModule {}
