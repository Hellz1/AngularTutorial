import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioLoginDTO } from '../models/usuario-login-dto';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionService: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let usuario: UsuarioLoginDTO = this.autenticacionService.obtenerUsuario();
    let request = req;

    if(usuario){
      request = req.clone({
        setHeaders: {
          authorization: 'TOKEN-' + usuario.tokenIntegrity,
          "MI-HEADER-PERSONALIZADO": "test"
        }
      });
    }

    return next.handle(request);
  }
}
