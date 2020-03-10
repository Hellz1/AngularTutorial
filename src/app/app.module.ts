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

import { HttpClientModule} from "@angular/common/http";
import { LoginService } from './shared/services/login.service';

@NgModule({
  declarations: [ //Aqui generalmente se registran todos los archivos tipo component
    AppComponent,
    FormularioComponent,
    ComunicacionComponent,
    HeaderComponent,
    LoginComponent,
    GeneralComponent
  ],
  imports: [ //Aqui generalmente se registran todos los archivos tipo module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule // -> Este registra el formbuilder al modulo
  ],
  providers: [ //Aqui generalmente se registran todos los archivos de tipo service
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
