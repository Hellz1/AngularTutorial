import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

   //VARIABLES GLOBALES
   title;
   valorString: string = "binding";
   objectoAny: { valor1: string, valor2: number};
   obj;

   a: number = 0;
   b: number = 0;
   hoy: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.title = 'practica';
  }

 
  
  test(){
    this.valorString = "Hola";
    this.objectoAny = { valor1:"hola", valor2: 33};

    console.log(this.valorString, this.objectoAny);
    
    //variables locales
    var local;

    local = "holá";
    local = 33;
  }

  sumar(a: number,b: number,dia: Date){
    let c: number;
    try{
      c = Math.sqrt(c);
      let resultado = a + b ; 
      console.log("Suma: a + b ", resultado);
      console.log("Esto se imprimio el día", dia);
      //throw new Error("mensaje de error");
    } 
    catch(error){
      console.error('Aqui va el mensaje de error', error);
    }

    console.log("Raiz cuadrada", c);

    //NUMBER
    let x = 33.33/33;

    console.log("Resultado de X", x);

  }

}
