import { Component, OnInit} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{
  
  productos!: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => {
      this.productos = data;
      console.log(this.productos)
    })
  }
}