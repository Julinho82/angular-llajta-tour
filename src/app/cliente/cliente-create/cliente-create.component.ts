import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cliente.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fBuilder: FormBuilder, private clienteservice: ClienteService ) { 
    this.form=this.fBuilder.group(
      {
        nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
        apellidos:["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
        direccion:["",[Validators.required]],
        ci:["",[Validators.required]],
        telefono:["",[Validators.required]]
      }
    );
  }

  ngOnInit() {
  }
  
  crearCliente():void{

    this.clienteservice.crearCliente(this.form.value)
    .subscribe(
      (respuesta)=>{
        console.log('Respuesta del Servicio',respuesta);
      },
      (error)=>{
        console.log('Error en el Servicio',error);
      },
      ()=>{
        console.log('Se termino de ejecutar el Observable');
      }
    );

  }
}
