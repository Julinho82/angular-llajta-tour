import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from '../../shared/services/cliente.service';


@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {


  titulo: string;
  
  listados: Cliente[];

  constructor(private clienteservice: ClienteService) {

    this.titulo='Nuestros Clientes';
    /*this.listados=[
      {
        id:0,
        nombres:'Cinthya Jimena',
        apellidos:'Montaño Rojas',
        direccion: 'Tocopilla 1022',
        ci:'5242252',
        telefono: '79354642'
      },
      {
        id:1,
        nombres:'Julio Rafael',
        apellidos:'Daviú Arévalo',
        direccion: 'Ruiz de Orellana 1185',
        ci:'5242252',
        telefono: '79733270'
      }
    ];*/
    this.listados=[];


   }

  ngOnInit() {

    this.clienteservice.listarClientes()
    .subscribe(
      (respuesta)=>{
        console.log('Respuesta del servicio',respuesta);
        this.listados=respuesta;
      },
      (error)=>{
        console.log('Error en el Servicio',error);
      }

    );
  }

  /*onClick():void{
    this.usuario='Daviu';
    console.log(this.usuario);
    this.fecha= Date();
    console.log(this.cliente);
    this.cliente=["Alvaro Gamboa","Carlos Salvatierra","Felipe Arce","Carlos Sañvatierra"];
  }*/
}
