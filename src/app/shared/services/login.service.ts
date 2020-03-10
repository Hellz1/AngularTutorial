import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../models/login-dto';
import { Observable } from 'rxjs';
import { UsuarioLoginDTO } from '../models/usuario-login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private _http: HttpClient) { }

  public login(usuario: string, password: string): Boolean{
    //TODO: Quitar este hardcode y conectar a API
    let hcUsuario = "fua";
    let hcPassword = "1";
    if(usuario == hcUsuario && password == hcPassword)
      return true;
    else 
      return false;
  }

  // public string function(param1,param2){ }
  // public function(param1,param2): string { }
  public loginAPI(loginDto: LoginDTO): Observable<UsuarioLoginDTO>{
    return this._http.post<UsuarioLoginDTO>("",loginDto);
  }

  public obtenerDatos(){
    let array = [
      {
        data: 'hola', nid: 1, array: [
          { data1: 'hola1' },
          { data1: 'hola2' },
          { data1: 'hola3' }
        ]
      },
      {
        data: 'hola1', nid: 2, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hol2', nid: 5, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hola3', nid: 41, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hol4', nid: 3, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hol5', nid: 6, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hola6', nid: 11, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hola7', nid: 12, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
      {
        data: 'hola8', nid: 13, array: [
          { data1: 'hola1' },
          { data1: 'hola2' }
        ]
      },
    ];

    return array;
  }
}
