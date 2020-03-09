import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent}, //localhost:4200/formulario
  { path: 'comunicacion', component: ComunicacionComponent} //localhost:4200/comunicacion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
