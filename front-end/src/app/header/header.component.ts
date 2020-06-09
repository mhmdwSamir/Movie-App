import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../signingService/authenitcation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private _authenticationService: AuthenticationService) {
    this._authenticationService.isAuthenticated()
    .subscribe((authenticated) => this.isAuthenticated = authenticated);
  }

  ngOnInit(): void {
  }

  logOut() {
    this._authenticationService.setAuthenticationState(false);
  }
}
