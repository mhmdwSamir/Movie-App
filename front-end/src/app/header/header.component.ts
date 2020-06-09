import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../signingService/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private _authenticationService: AuthenticationService) {
    this.isAuthenticated = this._authenticationService.isAuthenticated()
  }

  ngOnInit(): void {
  }

}
