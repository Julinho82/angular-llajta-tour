import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';

@NgModule({
  declarations: [ClienteListaComponent, ClienteCreateComponent, ClienteEditComponent, ClienteDeleteComponent, ClienteItemComponent, ClienteDetalleComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
