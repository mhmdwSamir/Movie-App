import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  private _currentUser$ = new BehaviorSubject<boolean>(!!this.currentUser);
  private _isAdmin$ = new BehaviorSubject<boolean>(this.currentUser ? this.currentUser.isAdmin : false);

  rootUrl = `http://localhost:3000/api/auth`;
  constructor(private _http: HttpClient) { }
  createUser(userData: userCredentials) {
    return this._http.post(`${this.rootUrl}/signUp`, userData);
  }
  
  login(username: string, password: string): Observable<IUserAuthentication> {
    if (password == 'admin' && username == 'admin') {
      this._currentUser$.next(true)
      this._isAdmin$.next(true)
      return of({ username, isAdmin: true })
    } else if (password == 'P@ssw0rd' && username == 'mohammed') {
      this._currentUser$.next(true)
      this._isAdmin$.next(false)
      return of({ username, isAdmin: false })
    } else {
      this._currentUser$.next(false)
      this._isAdmin$.next(false)
      return throwError({ error: 'unauthorized' })
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this._currentUser$
  }

  isAuthorized() {
    return this._isAdmin$;
  }

  setAuthenticationState(state: boolean) {
    this._currentUser$.next(state);
  }
}
