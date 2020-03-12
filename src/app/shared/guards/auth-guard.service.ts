import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(public autenticacionService: AutenticacionService,
              public router: Router) { }
  
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    //Logica de control de acceso
    let usuario = this.autenticacionService.obtenerUsuario();
    if(usuario){
      //usuario.roleCVe : "ADMINISTRADOR"
      //next.data.role: "ADMINISTRADOR"
      if(usuario.roleCve == next.data.role){
        return true;
      }
    }

    this.autenticacionService.navegarURL('/login');
    return false;
  }
}
