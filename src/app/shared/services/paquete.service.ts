import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paquete } from '../models/paquete';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private httpclient: HttpClient) {


  }

  /* 
  Crear paquete POST
  */
  crearPaquete(data: any): Observable<Paquete> {
    return this.httpclient.post<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/", data);
  }

  /* 
  Listar paquete GET
  */
  listarPaquetes(): Observable<Paquete[]> {
    return this.httpclient.get<Paquete[]>("https://llajtatour.herokuapp.com/api/paquetes/");
  }

  /* 
   Editar paquete por Id POST
   */
  editarPorId(id: any, paqueteUpdate: any): Observable<Paquete> {
    return this.httpclient.put<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/" + id + "/", paqueteUpdate);

  }

  /* 
 Recuperar paquete por Id GET
 */
  recuperarPorId(id: number): Observable<Paquete> {
    return this.httpclient.get<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/" + id + "/");

  }
  /* 
  Eliminar paquete por Id  DELETE
  */
  eliminarPorId(id: any): Observable<Paquete> {
    return this.httpclient.delete<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/" + id + '/');
  }
}
