import { Component} from '@angular/core';
import { productos } from '../../../productos-bd';
import { TokenStoreService } from '../../services/token-store.service';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos = productos;

  constructor(private tokenStorage: TokenStoreService, 
    private loggedIn: LoginDataService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
      //this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }
}