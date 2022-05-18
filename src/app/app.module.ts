import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CompartilhadoModule } from './05-compartilhado/app.module';

// OUTROS
import { WindowDom } from './dom/window.dom';
import { environment } from "src/environments/environment";
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';

// COMPONENTES
import { AppComponent } from './app.component';
import { IndexComponent } from './00-pagina/index/index.component';
import { CadastrarComponent } from './01-autenticar/cadastrar/cadastrar.component';
import { PaginaNaoEncontradaComponent } from './07-componente/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CriarContaComponent } from './00-pagina/criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CriarContaComponent,
    CadastrarComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompartilhadoModule,
    BrowserAnimationsModule
  ],

  providers: [
    WindowDom,
    { provide: USE_AUTH_EMULATOR, useValue: environment.emuladorFirebase ? ['http://localhost:9099'] : undefined }],

  bootstrap: [AppComponent]
})
export class AppModule { }
