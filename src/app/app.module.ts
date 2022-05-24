import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OUTROS
import { WindowDom } from './method/window.dom';
import { environment } from 'src/environments/environment';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';

// MODULO
import { AccountModule } from './view/account/account.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AccountModule,
    HttpClientModule,
    AppRoutingModule
   /*  MaterialDesign, */
    /*  HttpClientModule, */
    /*  RouterModule, */
    /*  BrowserAnimationsModule, */
    /*  FormsModule, */
    /*  ReactiveFormsModule, */
  ],

  providers: [
    WindowDom,
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.emuladorFirebase
        ? ['http://localhost:9099']
        : undefined,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
