import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/shared/general/general.component';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginDTO } from 'src/app/shared/models/login-dto';
import { UsuarioLoginDTO } from 'src/app/shared/models/usuario-login-dto';
import { forkJoin } from 'rxjs';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends GeneralComponent implements OnInit {

  public loginForm: FormGroup;

  datosLogin: any[] = [];

  userLogin: UsuarioLoginDTO = null;
  userLogin2: UsuarioLoginDTO = null;
  userLogin3: UsuarioLoginDTO = null;

  catalogoDatos = null;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              public autenticacionService: AutenticacionService,
              private router: Router) {
    super(autenticacionService);
  }

  ngOnInit() {
    this.buildForm();
    this.obtenerFecha();
    console.log(this.loginForm);
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(1)]],
        email: ['', Validators.email]
      });

    // input value='', required=tue
    // input value='' required = true, minlength=10
    // input value='' type=email
  }

  botonSinAccion() {
    alert("Diste clic al boton sin accion");
  }

  //this.loginForm.controls["email"].value
  enviarDatos() {

    let usuario: string = this.fua.usuario.value;
    let password: string = this.fua.password.value;
    let loginDTO = new LoginDTO(usuario,password);
    
    let response = this.loginService.loginAPI(loginDTO);
    let catalogoCiclo = this.loginService.obtenerCatalogoCicloEscolar();

    //FORMA 1: Subscribe
    response.subscribe(
      success => {
        this.userLogin = success;
        this.autenticacionService.guardarSesion(this.userLogin);
      
        this.loginService.navegarURL('/formulario');
      },
      error => {
        console.log("Error de login: " + error);
      }
    );

    //FORMA 2: Promesas
    // let promise = response.toPromise();
    // promise
    // .then(
    //   success => {
    //     this.userLogin2 = success;
    //   },
    //   error => {
    //     console.log("Error de login: "+ error );
    //   }
    // )
    // .catch(() => { });

    //FORMA 3: Paralelo si las las peticiones son independientes
    // forkJoin([response,catalogoCiclo])
    //   .subscribe(
    //     resultado => {
    //       this.userLogin3 = resultado[0];
    //       this.catalogoDatos = resultado[1];
    //     }
    //   );


    // if (this.loginService.login(usuario,password)) {
    //   alert("Login correcto el dia: " + this.fecha);
    //   this.datosLogin = this.loginService.obtenerDatos();
    // }
    // else
    //   alert("revisa los datos");

  }

  get fua() {
    return this.loginForm.controls;
  }
}
