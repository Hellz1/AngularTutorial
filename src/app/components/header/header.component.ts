import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fecha: Date = null;
  @Output() salida = new EventEmitter<string>();

  global;

  constructor() { }

  ngOnInit() {
    this.global = this.fecha;
  }

  responder(){
    this.salida.emit('Esta es tu fecha ' + this.global);
  }

}
