import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {

  productos!: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => this.productos = data)
  }

  deleteProducto(prodID: number) {
    this.productoService.delete(prodID.toString()).subscribe(result => this.refreshList())
  }

  refreshList() {
    this.ngOnInit();
  }

}
