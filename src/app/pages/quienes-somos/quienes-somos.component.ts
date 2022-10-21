import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from '../../services/token-store.service';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

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
