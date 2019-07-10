import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms/';
import { ReactiveFormsModule } from '@angular/forms';

import { PaqueteRoutingModule } from './paquete-routing.module';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component';
import { PaqueteCreateComponent } from './paquete-create/paquete-create.component';
import { PaqueteEditComponent } from './paquete-edit/paquete-edit.component';
import { PaqueteDeleteComponent } from './paquete-delete/paquete-delete.component';
import { PaqueteItemComponent } from './paquete-item/paquete-item.component';
import { PaqueteDetalleComponent } from './paquete-detalle/paquete-detalle.component';

@NgModule({
  declarations: [PaqueteListaComponent, PaqueteCreateComponent, PaqueteEditComponent, PaqueteDeleteComponent, PaqueteItemComponent, PaqueteDetalleComponent],
  imports: [
    CommonModule,
    PaqueteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class PaqueteModule { }
