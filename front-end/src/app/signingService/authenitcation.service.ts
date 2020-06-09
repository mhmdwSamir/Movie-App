import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
export interface IUserAuthentication {
  username: string;
  isAdmin: boolean;
}
export interface userCredentials {
  username: string;
  email: string;
  password: string;
  displayName?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser = JSON.parse(localStorage.getItem('user')) as IUserAuthentication;

  rootUrl = `http://localhost:3000/api/auth`;
  constructor(private _http: HttpClient) {}
  createUser(userData: userCredentials) {
    return this._http.post(`${this.rootUrl}/signUp`, userData);
  }
  
  login(username: string, password: string): Observable<IUserAuthentication> {
    if (password == 'admin' && username == 'admin') {
      return of({ username, isAdmin: true });
    } else if (password == 'P@ssw0rd' && username == 'mohammed') {
      return of({ username, isAdmin: false });
    } else {
      return throwError({ error: 'unauthorized' });
    }
  }

  isAuthenticated() {
    return this.currentUser != undefined && this.currentUser.username != undefined
  }
}
