import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaqueteListaComponent } from './paquete-lista/paquete-lista.component';
import { PaqueteCreateComponent } from './paquete-create/paquete-create.component';
import { PaqueteEditComponent } from './paquete-edit/paquete-edit.component';
import { PaqueteDeleteComponent } from './paquete-delete/paquete-delete.component';
import { PaqueteItemComponent } from './paquete-item/paquete-item.component';
import { PaqueteDetalleComponent } from './paquete-detalle/paquete-detalle.component';
import { PaqueteDeleteDetailComponent } from './paquete-delete-detail/paquete-delete-detail.component';

//LazyRouting por modulo
const routes: Routes = [
  {
    path:'lista',
    component:PaqueteListaComponent
  },
  {
    path:'crear',
    component:PaqueteCreateComponent
  },
  {
    path:'editar/:id',
    component:PaqueteEditComponent
  },
  {
    path:'eliminar/:id',
    component:PaqueteDeleteComponent
  },
  {
    path:'item',
    component:PaqueteItemComponent
  },
  {
    path:'detalle/:id',
    component:PaqueteDetalleComponent
  },
  {
    path:'eliminar_detalle/:id',
    component:PaqueteDeleteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaqueteRoutingModule { }
