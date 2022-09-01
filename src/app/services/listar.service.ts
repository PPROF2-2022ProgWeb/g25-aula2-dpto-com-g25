import { Injectable } from '@angular/core';
import {Productos} from '../../productos-bd';
import {productos} from '../../productos-bd';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListarService {
  getProducto(id: number): Observable<any> {
    return of(productos.find(producto => producto.id === id));
  }
}