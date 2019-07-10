import { Component, OnInit, Input } from '@angular/core';
import { Paquete } from "../../shared/models/paquete";





@Component({
  selector: 'app-paquete-item',//como se representa en html <app-paquete-item></app-paquete-item>
  templateUrl: './paquete-item.component.html',
  styleUrls: ['./paquete-item.component.css']
})
export class PaqueteItemComponent implements OnInit {

  @Input()//Atributo recibe información desde afuera
  paquete: Paquete;




  constructor() { 


  }

  ngOnInit() {

  }

}
