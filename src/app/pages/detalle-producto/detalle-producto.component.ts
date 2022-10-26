import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  
  producto!: Producto;
  productoSubscription!: Subscription;
  
  constructor(private route: ActivatedRoute,
  private productoService: ProductoService,
  private location: Location) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productoSubscription = this.productoService.findById(id).subscribe(producto => this.producto = producto);
    this.productoSubscription.unsubscribe;
  }

  goBack(): void {
    this.location.back();
  }

}
