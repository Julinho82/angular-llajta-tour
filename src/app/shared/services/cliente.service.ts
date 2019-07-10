import { Injectable } from '@angular/core';
import { Cliente } from '.././models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpclient:HttpClient) {
    
   }

    /* 
  Crear paquete POST
  */
 crearCliente(data: any): Observable<Cliente> {
  return this.httpclient.post<Cliente>("https://llajtatour.herokuapp.com/api/clientes/", data);
}

/* 
Listar paquete GET
*/
listarClientes(): Observable<Cliente[]> {
  return this.httpclient.get<Cliente[]>("https://llajtatour.herokuapp.com/api/clientes/");
}

/* 
 Editar paquete por Id POST
 */

/* 
Recuperar paquete por Id GET
*/
recuperarPorId(id: any): Observable<Cliente> {
  return this.httpclient.get<Cliente>("https://llajtatour.herokuapp.com/api/clientes/" + id + "/");

}

/* 
Eliminar paquete por Id  DELETE
*/
}


