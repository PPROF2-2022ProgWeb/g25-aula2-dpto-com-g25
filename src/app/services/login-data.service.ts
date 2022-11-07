import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private admin = new BehaviorSubject(false);
  isAdmin = this.admin.asObservable();
  private logged = new BehaviorSubject(false);
  isLoggedIn = this.logged.asObservable();
  private name = new BehaviorSubject('');
  userName = this.name.asObservable();


  constructor() {}

  changeAdmin(admin: boolean) {
    this.admin.next(admin);
  }

  changeLogged(logged: boolean) {
    this.logged.next(logged);
  }

  username(name: string) {
    this.name.next(name);
  }
}
