import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStoreService } from 'src/app/services/token-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})

export class NuevoProductoComponent implements OnInit{

  isLoggedIn!: boolean;
  isAdmin!: boolean;
  subscription!: Subscription;
  rol!: string;
  
  producto!: Producto;


  constructor(
    private router: Router,
    private productoService: ProductoService, private loggedIn: LoginDataService,
    private tokenStorage: TokenStoreService) { 
      this.producto = new Producto()
    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
      this.rol = this.tokenStorage.getUser().roles;
        if (this.rol.includes('ROLE_ADMIN')){
        this.loggedIn.changeAdmin(true);
      }
    }
  
    this.subscription = this.loggedIn.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)
  }

  onSubmit() {
    this.producto.id_categoria = 1
    this.productoService.save(this.producto).subscribe(result => this.goToAdminProductos())
  }

  goToAdminProductos() {
    this.router.navigate(['/admin-producto'])
  }

}
