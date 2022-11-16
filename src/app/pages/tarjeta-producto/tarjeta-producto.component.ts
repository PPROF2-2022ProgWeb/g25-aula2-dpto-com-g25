import {Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStoreService } from 'src/app/services/token-store.service';

import { Subscription } from 'rxjs';





   @Component({
     selector: 'app-tarjeta',
     templateUrl: './tarjeta-producto.component.html',
     styleUrls: ['./tarjeta-producto.component.css']
   })


   export class TarjetaProductoComponent implements OnInit{
      
    isLoggedIn!: boolean;
    subscription!: Subscription;


    constructor(private loggedIn: LoginDataService, private tokenStorage: TokenStoreService,private carritoService: CarritoService) {
    }

    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.loggedIn.changeLogged(true);
      }

      this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)
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