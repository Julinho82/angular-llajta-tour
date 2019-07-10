import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaqueteService } from '../../shared/services/paquete.service';
import { Paquete } from '../../shared/models/paquete';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paquete-detalle',
  templateUrl: './paquete-detalle.component.html',
  styleUrls: ['./paquete-detalle.component.css']
})
export class PaqueteDetalleComponent implements OnInit {

  paquete: Paquete;
  form: FormGroup;


  constructor(private activatedroute: ActivatedRoute,
     private fBuilder: FormBuilder,
    private paqueteservice: PaqueteService) { 
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

}
