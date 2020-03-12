import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { take } from 'rxjs/operators';
import { UsuarioLoginDTO } from 'src/app/shared/models/usuario-login-dto';
import { GeneralComponent } from 'src/app/shared/general/general.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends GeneralComponent implements OnInit {

  @Input() fecha: Date = null;
  @Output() salida = new EventEmitter<string>();

  global;

  constructor(public autenticacionService: AutenticacionService) { 
    super(autenticacionService);
  }
  
  ngOnInit() {
    this.global = this.fecha;
    this.suscribirSesion();
  }

  responder(){
    //this.salida.emit('Esta es tu fecha ' + this.global);
    alert(this.autenticacionService.obtenerUsuario());
  }

 

}
