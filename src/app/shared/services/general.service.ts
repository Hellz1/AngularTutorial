import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public _http?: HttpClient, public router?: Router) { }

  public obtenerCatalogoCicloEscolar(){
    return this._http.get("http://193.168.2.32:4043/api/supervision/ciclo-escolar/catalogo");
  }

    
  public navegarURL(url: string){
    this.router.navigateByUrl(url);
  }

}
