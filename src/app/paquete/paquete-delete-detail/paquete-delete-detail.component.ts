import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaqueteService } from '../../shared/services/paquete.service';
import { Paquete } from '../../shared/models/paquete';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paquete-delete-detail',
  templateUrl: './paquete-delete-detail.component.html',
  styleUrls: ['./paquete-delete-detail.component.css']
})
export class PaqueteDeleteDetailComponent implements OnInit {

  paquete: Paquete;
  form: FormGroup;


  constructor(private activatedroute: ActivatedRoute,
    private fBuilder: FormBuilder,
   private paqueteservice: PaqueteService,
   private routes:Router) { 
     this.form = this.fBuilder.group(
       {
         destino: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
         descripcion: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
         precio: [10, [Validators.required, Validators.min(10), Validators.max(100000)]],
         guia: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
         fechaPartida: ["", [Validators.required]]
       }
     )
 

 }

 ngOnInit() {

   //observable
   this.activatedroute.params
     .subscribe(
       (params) => {
         //console.log('Params recuperado', params);
         this.paqueteservice.recuperarPorId(params.id).subscribe(
           (respuesta) => {
             console.log('Servicio id recuperado', respuesta); 
               this.paquete=respuesta;
           },
           (error)=>{
             console.log('Servicio Id no recuperado',error);
           }
         )
       },
       (error) => {
         console.log('Error al recuperar parametros', error);
       },
       () => {
         console.log('Se termino Observable');
       }
     );

     



 }

 eliminaPaquete(): void {

  this.paqueteservice.eliminarPorId(this.paquete.id)
    .subscribe(
      //exito
      (respuesta) => {
        //redireccionar a Listar paquete si se creo paquete
        this.routes.navigate(['paquetes','lista']);

        //Consola de respuesta
        console.log('Se eliminaron el paquete: ', respuesta);
      },
      //fracaso
      (error) => {
        console.log(this.form.value);

        console.log('Error en el servidor: ', error);
      },
      //culminacion observable
      () => {
        console.log('Se termino de ejecutar el observable');
      }
    );
    }
}
