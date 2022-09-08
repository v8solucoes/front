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


// MODULO
import { AccountModule } from './view/account/account.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { TermsComponent } from './view/terms/terms.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TermsComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    HttpClientModule,
    AccountModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        
   /*  MaterialDesign, */
    /*  HttpClientModule, */
    /*  RouterModule, */
    /*  BrowserAnimationsModule, */
    /*  FormsModule, */
    /*  ReactiveFormsModule, */
  ],

  providers: [ WindowDom ],

  bootstrap: [AppComponent],
})
export class AppModule {}
