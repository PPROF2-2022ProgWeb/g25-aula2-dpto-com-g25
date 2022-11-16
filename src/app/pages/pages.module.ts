import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { RegistroComponent } from './registro/registro.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

import { AdminProductoComponent } from './admin-producto/admin-producto.component';


import { FormsModule} from '@angular/forms';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CarritoComponent } from './carrito/carrito.component';




@NgModule({
  declarations: [
    ListaProductosComponent,
    TarjetaProductoComponent,
    DetalleProductoComponent,
    RegistroComponent,
    QuienesSomosComponent,
    InicioSesionComponent,
    AdminUserComponent,
    AdminProductoComponent,
    NuevoProductoComponent,
    CarritoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
})
export class PagesModule { }
