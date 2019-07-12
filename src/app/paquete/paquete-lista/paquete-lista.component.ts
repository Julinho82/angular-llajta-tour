import { Component, OnInit } from '@angular/core';
import { Paquete } from "../../shared/models/Paquete";
import { PaqueteService } from '../../shared/services/paquete.service';



@Component({
  selector: 'app-paquete-lista',
  templateUrl: './paquete-lista.component.html',
  styleUrls: ['./paquete-lista.component.css']
})
export class PaqueteListaComponent implements OnInit {

  titulo: string;

  lugares: Paquete[];

  elementoBusqueda: string;

  imagen_url: string; 

  /* boton: string;
 
   departamento: string;*/

  constructor(private paqueteservice: PaqueteService) {

    /*this.boton="'Accion del boton Ver info'";*/
     this.titulo='Nuestros Destinos';
     this.imagen_url="";
    /*this.lugares=["Cristo","Pairumani","Corani"];*/
    /* this.lugares=[
       {
         id:0,
         destino:'Liriuni',
         descripcion:'Paquete turistico especial',
         precio: 100,
         guia:'Nelson Morante',
         fechaPartida:'may 27 2019' 
        },
        {
         id:1,
         destino:'Pairumani',
         descripcion:'Paquete turistico familiar',
         precio: 150,
         guia:'Julio Daviu',
         fechaPartida:'jul 31 2019' 
        },
        {
         id:2,
         destino:'Corani',
         descripcion:'Paquete turistico invernal',
         precio: 250,
         guia:'Juan Perez',
         fechaPartida:'ago 31 2019' 
        },
        {
         id:3,
         destino:'Cristo de la Concordia',
         descripcion:'Paquete turistico ciudad',
         precio: 50,
         guia:'Miguel Suarez',
         fechaPartida:'jul 03 2019' 
        },
        {
         id:4,
         destino:'Toro Toro',
         descripcion:'Paquete turistico departamental',
         precio: 350,
         guia:'Miguel Suarez',
         fechaPartida:'jul 03 2019' 
        }
 
     ];*/

    // console.log(this.lugares);


    this.elementoBusqueda = 'Ingrese su búsqueda';
    this.lugares = [];
    
  }

  ngOnInit() {
    /*console.log(this.lugares)*/
    this.paqueteservice.listarPaquetes()
      .subscribe(
        (respuesta) => {
          console.log('Respuesta del Servidor', respuesta);
          this.lugares = respuesta;
        },
        (error) => {
          console.log('Error en el servidor', error);
        },
        ()=>{
          console.log('Termino el observable');
        }
      );
  }

  /*verInfo():void{
    console.log('Accion del boton Ver info');
    this.titulo='Cochabamba';
  }*/

  buscarElementos(): void {

    console.log(this.elementoBusqueda)
  }
  myMethodo(event):void{

    this.imagen_url=event;

  }
}
