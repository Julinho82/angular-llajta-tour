import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//´registro de rutas de los modulos
{
  path:'paquetes',
  loadChildren:()=>import('./paquete/paquete.module').then(mod=>mod.PaqueteModule)
},
{
  path:'clientes',
  loadChildren:()=>import('./cliente/cliente.module').then(mod=>mod.ClienteModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
