import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaqueteService } from '../../shared/services/paquete.service';
import { Router } from '@angular/router';
import { Paquete } from '../../shared/models/paquete';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete-edit',
  templateUrl: './paquete-edit.component.html',
  styleUrls: ['./paquete-edit.component.css']
})
export class PaqueteEditComponent implements OnInit {

  form: FormGroup;
  paquete: Paquete;



  constructor(
    private fBuilder: FormBuilder,
    private paqueteservice: PaqueteService,
    private routes: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.form = this.fBuilder.group(
      {
        id: ["",[]],
        destino: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        descripcion: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        precio: [0, [Validators.required, Validators.min(10), Validators.max(100000)]],
        guia: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        fechaPartida: ["", [Validators.required]]
      }
    )


  }

  ngOnInit() {
    this.activatedroute.params
      .subscribe(
        (params) => {
          //console.log('ID recuperado', params);
          this.paqueteservice.recuperarPorId(params.id).subscribe(
            (respuesta) => {
              console.log('JSON recuperado', respuesta);
              this.paquete = respuesta;
              this.form.setValue(respuesta);
              console.log('Formulario recuperado: ',this.form.value);
  

            },
            (error) => {
              console.log('Servicio Id no recuperado', error);
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

  actualizaPaquete(): void {

    this.paqueteservice.editarPorId(this.paquete.id, this.form.value)
      .subscribe(
        //exito
        (respuesta) => {
          //redireccionar a Listar paquete si se creo paquete
          this.routes.navigate(['paquetes','lista']);

          //Consola de respuesta
          console.log('Se actualizaron los campos: ', respuesta);
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


  reiniciarForm(): void {
    this.form.reset();
  }
}
