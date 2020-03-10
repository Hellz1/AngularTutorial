import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { GeneralComponent } from './shared/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ComunicacionComponent,
    HeaderComponent,
    LoginComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule // -> Este registra el formbuilder al modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
