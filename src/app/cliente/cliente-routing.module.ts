import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';

const routes: Routes = [
  {
    path:'crear',
    component:ClienteCreateComponent
  },
  {
    path:'editar',
    component:ClienteEditComponent
  },
  {
    path:'eliminar',
    component:ClienteDeleteComponent
  },
  {
    path:'listar',
    component:ClienteListaComponent
  },
  {
    path:'item',
    component:ClienteItemComponent
  },
  {
    path:'detalle/:id',
    component:ClienteDetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
