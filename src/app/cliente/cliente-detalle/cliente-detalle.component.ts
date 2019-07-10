import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/models/cliente';
import { ClienteService } from '../../shared/services/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  cliente: Cliente;
  form: FormGroup;

  constructor(private activatedroute: ActivatedRoute,
              private clienteservice: ClienteService,
              private fbuilder: FormBuilder) {

              this.form=this.fbuilder.group(
                {
                  nombre:["",[Validators.required]],
                  apellidos:["",[Validators.required]],
                  direccion:["",[Validators.required]],
                  ci:["",[Validators.required]],
                  telefono:["",[Validators.required]],
                }
              );
               }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (parms)=>{
        this.clienteservice.recuperarPorId(parms.id)
        .subscribe(
          (respuesta)=>{
            this.cliente=respuesta;
            console.log('Servicio id recuperado', respuesta); 
          },
          (error)=>{}
        );
      },
      (error)=>{}
    );
  }

}
