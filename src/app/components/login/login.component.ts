import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/shared/general/general.component';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginDTO } from 'src/app/shared/models/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends GeneralComponent implements OnInit {

  public loginForm: FormGroup;

  datosLogin: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService) {
    super();
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

    //FORMA 1: Subscribe
    response.subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log("Error de login: " + error);
      }
    );

    //FORMA 2: Promesas



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
