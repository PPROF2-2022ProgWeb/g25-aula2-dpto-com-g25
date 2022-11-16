import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items: Producto[] =[]

  constructor() { }

  addToCart(producto: Producto) {
    this.items.push(producto)
    console.log(this.items)
  }

  total() {
    let precioFinal = 0
    this.items.forEach(function(item) {
      
      precioFinal = precioFinal + item.precio

    })
    return precioFinal
  }

  deleteItem(id: number){
  
    let items2 = this.items
  
    items2.forEach(function(item, index){
      if (item.id === id) items2.splice(index, 1)
    }
    )
    this.items = items2
  }

  getItems() {
    return this.items
  }

}
