import {Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CarritoService } from 'src/app/services/carrito.service';



   @Component({
     selector: 'app-tarjeta',
     templateUrl: './tarjeta-producto.component.html',
     styleUrls: ['./tarjeta-producto.component.css']
   })


   export class TarjetaProductoComponent{
      
    constructor(private carritoService: CarritoService) {
    }

     @Input()
     producto!: Producto;

     @Input()
     id!: number;

     addToCart(producto: Producto) {
      this.carritoService.addToCart(producto)
      window.alert('El producto fue agregado al carrito')
    }

   }