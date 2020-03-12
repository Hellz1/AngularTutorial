import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { BehaviorSubject } from 'rxjs';
import { UsuarioLoginDTO } from '../models/usuario-login-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService extends GeneralService{

  private sesion = new BehaviorSubject<UsuarioLoginDTO>(new UsuarioLoginDTO);

  /**
   * Por buenas practicas no se usa directamente el BehabiorSubject
   * Se utliiza en vez un observable que será publico
   */

  public sesion$ = this.sesion.asObservable();


  constructor(public router: Router) {
    super(null,router);
   }

   guardarSesion(sesion: UsuarioLoginDTO){
     this.sesion.next(sesion);
     sessionStorage.setItem('sesion',JSON.stringify(sesion));
   }

   obtenerUsuario(): UsuarioLoginDTO{
     return JSON.parse(sessionStorage.getItem('sesion'));
   }
}
