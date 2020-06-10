import { AsyncValidator, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../models/authentication';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  rootUrl = 'https://movie-app-v1.herokuapp.com/api/user/find-user';

  validate = (control: AbstractControl) => {
    const email = control.value;

    return this._http
      .get<User[]>(this.rootUrl, { params: { email } })
      .pipe(
        map((user) => {
          if (user) {
            return { existingEmail: true };
          } else {
            return null;
          }
        }),
        catchError((err) => {
          return of({ connectionError: true });
        })
      );
  };

  constructor(private _http: HttpClient) {}
}
