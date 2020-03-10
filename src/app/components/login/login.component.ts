import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  datosLogin: any[] = [];

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();

    console.log(this.loginForm);
  }

  private buildForm(){
    this.loginForm = this.formBuilder.group(
      {
        usuario: ['',Validators.required],
        password: ['', [Validators.required,Validators.minLength(10)]],
        email: ['', Validators.email]
      });

      // input value='', required=tue
      // input value='' required = true, minlength=10
      // input value='' type=email
  }

  botonSinAccion(){
    alert("Diste clic al boton sin accion");
  }

  //this.loginForm.controls["email"].value
  enviarDatos(){
    let usuario: string = this.fua.usuario.value;
    let password: string = this.fua.password.value;
    if(usuario == "fua" && password =="1234567890"){
      alert("Login correcto");
      this.datosLogin = [
        {data: 'hola', nid: 1},
        {data: 'hola1', nid: 2},
        {data: 'hol2', nid: 5},
        {data: 'hola3', nid:41},
        {data: 'hol4', nid: 3},
        {data: 'hol5', nid: 6},
        {data: 'hola6', nid: 11},
        {data: 'hola7', nid: 12},
        {data: 'hola8', nid: 13},
      ];
    }
    else
      alert("revisa los datos");
    
  }

  get fua(){
    return this.loginForm.controls;
  }
}
