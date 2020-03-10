import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralComponent } from 'src/app/shared/general/general.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends GeneralComponent implements OnInit {

  public loginForm: FormGroup;

  datosLogin: any[] = [];

  constructor(private formBuilder: FormBuilder) {
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
    if (usuario == "fua" && password == "1") {
      alert("Login correcto el dia: " + this.fecha);
      this.datosLogin = [
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
    }
    else
      alert("revisa los datos");

  }

  get fua() {
    return this.loginForm.controls;
  }
}
