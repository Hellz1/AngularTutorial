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

import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { LoginService } from './shared/services/login.service';
import { GeneralService } from './shared/services/general.service';
import { AutenticacionService } from './shared/services/autenticacion.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { InterceptorService } from './shared/interceptor/interceptor.service';

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
    NgSelectModule,
    ReactiveFormsModule, // -> Este registra el formbuilder al modulo
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ //Aqui generalmente se registran todos los archivos de tipo service
    LoginService,
    GeneralService,
    AutenticacionService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
