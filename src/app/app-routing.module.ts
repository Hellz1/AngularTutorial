import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent}, //localhost:4200/formulario
  { path: 'comunicacion', component: ComunicacionComponent}, //localhost:4200/comunicacion
  { path: 'login', component: LoginComponent}, //localhost:4200/login
  { path: '', redirectTo: '/login', pathMatch: 'full'} //Si se ingresa localhost:4200/ <-- se rederige a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
