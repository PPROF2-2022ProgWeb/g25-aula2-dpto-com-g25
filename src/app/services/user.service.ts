import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<User[]> {
    const user = this.http.get<User[]>(this.userUrl);
    return user;
  }

  public delete(uid: String) {

    return this.http.delete(this.userUrl+'/'+uid);
    
  }
}
