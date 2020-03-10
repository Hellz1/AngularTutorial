import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  template: ''
})
export class GeneralComponent implements OnInit {

  fecha: Date = null;
  constructor() { }

  ngOnInit() {
  }


  public obtenerFecha(){
    this.fecha = new Date();
  }



}
