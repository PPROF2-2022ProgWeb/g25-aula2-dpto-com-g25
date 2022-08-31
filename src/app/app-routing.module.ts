import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [{path: '', component: ListaProductosComponent},
{path: 'producto/:id', component: DetalleProductoComponent},
{path: 'registro/', component: RegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
