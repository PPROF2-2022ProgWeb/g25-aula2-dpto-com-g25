import {Component, Input } from '@angular/core';
import {Productos} from '../../productos-db';

   @Component({
     selector: 'app-tarjeta',
     templateUrl: './tarjeta.component.html',
     styleUrls: ['./tarjeta.component.css']
   })


   export class TarjetaComponent{
      
   
     @Input()
     producto!: Productos;

     @Input()
     id!: number;
   }
