import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
export interface IUserAuthentication {
  username: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SignService {
  rootUrl = '';
  currentUser = JSON.parse(localStorage.getItem('user')) as IUserAuthentication;
  constructor(private _http: HttpClient) {}

  login(username: string, password: string): Observable<IUserAuthentication> {
    if (password == 'admin' && username == 'admin') {
      return of({ username, isAdmin: true });
    } else if (password == 'P@ssw0rd' && username == 'mohammed') {
      return of({ username, isAdmin: false });
    } else {
      return throwError({ error: 'unauthorized' });
    }
  }
}
