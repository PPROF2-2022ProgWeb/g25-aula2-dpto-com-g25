import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

const routes: Routes = [{path: '', component: ListaProductosComponent},
{path: 'producto/:id', component: DetalleProductoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
