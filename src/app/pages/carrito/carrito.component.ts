import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items!: Producto[]
  precioFinal = 0

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.items = this.carritoService.getItems()
    this.precioFinal = this.carritoService.total()
  }

  deleteItem(id: number){
    this.carritoService.deleteItem(id)
    this.ngOnInit()
  }

}
