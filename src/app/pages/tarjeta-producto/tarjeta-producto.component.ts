import {Component, Input } from '@angular/core';
import {Productos} from '../../../productos-bd';


   @Component({
     selector: 'app-tarjeta',
     templateUrl: './tarjeta-producto.component.html',
     styleUrls: ['./tarjeta-producto.component.css']
   })


   export class TarjetaProductoComponent{
      
   
     @Input()
     producto!: Productos;

     @Input()
     id!: number;
   }