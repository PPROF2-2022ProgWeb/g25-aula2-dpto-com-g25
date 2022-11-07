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
  isAdmin!: boolean;
  isLoginFailed = false;
  errorMessage = '';
  rol!: string;
  subscription!: Subscription;

  constructor(private authService: AuthService, private tokenStorage: TokenStoreService, 
    private loggedIn: LoginDataService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
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
        this.rol = this.tokenStorage.getUser().roles;
        this.loggedIn.username(this.tokenStorage.getUser().username);
        if (this.rol.includes('ROLE_ADMIN')){
          this.loggedIn.changeAdmin(true);
          this.subscription = this.loggedIn.isAdmin.subscribe(admin => this.isAdmin = admin);
          this.router.navigate(['/admin-producto']);
        }
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
