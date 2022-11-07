import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoUrl: string;

  constructor(private http: HttpClient) {
    this.productoUrl = 'http://localhost:8080/api/productos';
  }

  public findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl);
  }

  public findById(pid: number): Observable<Producto> {
    return this.http.get<Producto>(this.productoUrl+'/id/'+pid.toString());
  }

  public save(producto: Producto) {
    return this.http.post<Producto>(this.productoUrl, producto);
  }

  public delete(pid: String) {
    return this.http.delete(this.productoUrl+'/'+pid);
    
  }

  public edit(pid: String, producto: Producto) {
    return this.http.put(this.productoUrl+'/'+pid, producto);

  }
}
