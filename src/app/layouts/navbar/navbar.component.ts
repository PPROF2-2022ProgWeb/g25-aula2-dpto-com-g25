import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStoreService } from 'src/app/services/token-store.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private loggedIn: LoginDataService, private tokenStorage: TokenStoreService
    , private router: Router) { }

  isLoggedIn!: boolean;
  subscription!: Subscription;


  ngOnInit(): void {
    this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)

  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.loggedIn.changeLogged(false);
    this.router.navigate(['/inicio-sesion']);
    //window.location.reload();
  }

}
