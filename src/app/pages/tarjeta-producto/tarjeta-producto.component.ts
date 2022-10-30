import {Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';



   @Component({
     selector: 'app-tarjeta',
     templateUrl: './tarjeta-producto.component.html',
     styleUrls: ['./tarjeta-producto.component.css']
   })


   export class TarjetaProductoComponent{
      
   
     @Input()
     producto!: Producto;

     @Input()
     id!: number;
   }