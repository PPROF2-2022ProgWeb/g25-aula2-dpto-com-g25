import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AdminProductoComponent } from './pages/admin-producto/admin-producto.component';

const   ROUTES: Routes = [
  {path: 'inicio', component: ListaProductosComponent},
  {path: 'producto/:id', component: DetalleProductoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'admin',component: AdminUserComponent},
  {path: 'admin-producto',component:AdminProductoComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'inicio'}
  {path:'', pathMatch: 'full', redirectTo: 'inicio'}
];


  export const AppRoutingModule=RouterModule.forRoot(ROUTES);
  

