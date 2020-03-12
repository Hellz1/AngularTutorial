import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { UsuarioLoginDTO } from '../models/usuario-login-dto';

@Component({
  selector: 'app-general',
  template: ''
})
export class GeneralComponent implements OnInit {

  fecha: Date = null;

  sesionInfo: UsuarioLoginDTO = null;
  
  constructor(public autenticacionService?: AutenticacionService) { }

  ngOnInit() {
  }


  public obtenerFecha(){
    this.fecha = new Date();
  }

  suscribirSesion(){
    this.autenticacionService.sesion$.subscribe(
        sesion => {
          this.sesionInfo = sesion;
        },
        error =>{
          this.sesionInfo = null;
        }
      );
  }


}
