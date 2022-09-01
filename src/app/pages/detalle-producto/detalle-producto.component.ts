import { Component, OnInit } from '@angular/core';
import {Productos} from '../../../productos-bd';
import {ListarService} from '../../services/listar.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  
  producto!: Productos;
  productoSubscription!: Subscription;
  
  constructor(private route: ActivatedRoute,
  private listarService: ListarService,
  private location: Location) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productoSubscription = this.listarService.getProducto(id).subscribe(producto => this.producto = producto);
    this.productoSubscription.unsubscribe;
  }

  goBack(): void {
    this.location.back();
  }

}
