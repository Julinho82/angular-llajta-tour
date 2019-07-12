import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaqueteService } from '../../shared/services/paquete.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-paquete-create',
  templateUrl: './paquete-create.component.html',
  styleUrls: ['./paquete-create.component.css']
})
export class PaqueteCreateComponent implements OnInit {


  form: FormGroup;
  printA: string = 'A';
  printB: string = 'B';
  printC: string = 'C';
  printD: string = 'D';
  printE: string = 'E';



  constructor(
    private fBuilder: FormBuilder, 
    private paqueteservice: PaqueteService,
    private routes: Router) {
    this.form = this.fBuilder.group(
      {
        destino: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        descripcion: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        precio: [10, [Validators.required, Validators.min(10), Validators.max(100000)]],
        guia: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        fechaPartida: ["", [Validators.required]],
        img_url:["",[Validators.required]]
      }
    )


  }

  ngOnInit() {
  }

  crearPaquete(): void {
    /*console.log('tratando de crear paquete');
    console.log(this.form.value);
   // console.log(this.form.errors);
    console.log(this.printA);
    console.log(this.printB);
    console.log(this.printC);
    console.log(this.printD);


    setTimeout(()=>{console.log(this.printE)},5000);

   new Promise(function (resolve:any, reject:any) {
      setTimeout(() => {
        console.log('F');
        resolve();
      }, 10000)
    })*/

    this.paqueteservice.crearPaquete(this.form.value)
    .subscribe(
      //exito
      (respuesta)=>{
        //redireccionar a Listar paquete si se creo paquete
        this.routes.navigate(['paquetes','lista']);

        //Consola de respuesta
        console.log('Respuesta del servidor: ',respuesta);
      },
      //fracaso
      (error)=>{
        console.log('Error en el servidor: ',error);
      },
      //culminacion observable
      ()=>{
        console.log('Se termino de ejecutar el observable');
      }
    );

    
  }

  reiniciarForm():void{
    this.form.reset();
  }

  verificarCierre():void{
    console.log('El date picker se cerro');
  }
}
