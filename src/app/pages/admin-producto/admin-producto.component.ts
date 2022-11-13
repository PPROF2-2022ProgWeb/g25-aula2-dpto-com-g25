import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStoreService } from 'src/app/services/token-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})

export class AdminProductoComponent implements OnInit {

  isLoggedIn!: boolean;
  isAdmin!: boolean;
  subscription!: Subscription;
  rol!: string;

  productos!: Producto[];

  constructor(private productoService: ProductoService, private loggedIn: LoginDataService, private tokenStorage: TokenStoreService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
      this.rol = this.tokenStorage.getUser().roles;
      //this.loggedIn.username(this.tokenStorage.getUser().username);
      if (this.rol.includes('ROLE_ADMIN')){
        this.loggedIn.changeAdmin(true);
      }
    }
    //this.subscription = this.loggedIn.userName.subscribe(name => this.username = name)
    this.subscription = this.loggedIn.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)

    this.productoService.findAll().subscribe(data => this.productos = data)
  }

  deleteProducto(prodID: number) {
    this.productoService.delete(prodID.toString()).subscribe(result => this.refreshList())
  }

  refreshList() {
    this.ngOnInit();
  }

}
