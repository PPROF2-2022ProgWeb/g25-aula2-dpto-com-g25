import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from '../../services/token-store.service';
import { LoginDataService } from 'src/app/services/login-data.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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
