import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paquete } from "../../shared/models/paquete";






@Component({
  selector: 'app-paquete-item',//como se representa en html <app-paquete-item></app-paquete-item>
  templateUrl: './paquete-item.component.html',
  styleUrls: ['./paquete-item.component.css']
})
export class PaqueteItemComponent implements OnInit {

  @Input()//Atributo recibe información desde afuera
  paquete: Paquete;

  imagen_url: string; 

  @Output()
  onOver : EventEmitter<string>;



  constructor() { 

    this.onOver=new EventEmitter();
    this.imagen_url="";


  }

  ngOnInit() {

  }

  mandarMensaje():void{
    //console.log('quiero enviar al URL de la imagen desde Card');
    //console.log(this.paquete.img_url);
    this.onOver.emit(this.paquete.img_url);
    //console.log(this.onOver.emit(this.paquete.img_url));
  }

 

}
