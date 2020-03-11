import { Component, OnInit } from '@angular/core';
import { GeneralComponent } from 'src/app/shared/general/general.component';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent extends GeneralComponent implements OnInit {

  constructor(public autenticationService: AutenticacionService) {
    super(autenticationService);
   }

  ngOnInit() {
    this.suscribirSesion();
  }

}
