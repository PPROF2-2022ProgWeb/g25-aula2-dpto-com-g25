import { Injectable } from '@angular/core';
import {Productos} from '../productos-db';
import {productos} from '../productos-db';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EscabioService {
  getProducto(id: number): Observable<any> {
    return of(productos.find(producto => producto.id === id));
  }
}
