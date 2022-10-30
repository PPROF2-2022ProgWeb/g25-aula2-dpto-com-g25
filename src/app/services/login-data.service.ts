import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  private logged = new BehaviorSubject(false);
  isLoggedIn = this.logged.asObservable();

  constructor() { }

  changeLogged(logged: boolean) {
    this.logged.next(logged);
  }
}
