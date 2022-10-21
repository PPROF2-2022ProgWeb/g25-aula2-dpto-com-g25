import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStoreService } from '../../services/token-store.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import {Router} from "@angular/router"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit, OnDestroy {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn!:boolean;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  subscription!: Subscription;

  constructor(private authService: AuthService, private tokenStorage: TokenStoreService, 
    private loggedIn: LoginDataService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
      //this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.loggedIn.changeLogged(true);
        //this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if (this.roles.includes('ROLE_ADMIN')){
        this.router.navigate(['/registro']);
        }
        //this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
