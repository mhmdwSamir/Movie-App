import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/signingService/sign.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: AuthenticationService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._activate()) {
      return true;
    } else {
      this._router.navigate(['/access-denaied'])
    };
  }

  private _activate() {
    return this._userService.currentUser != undefined && this._userService.currentUser.username != undefined;
  }
}
