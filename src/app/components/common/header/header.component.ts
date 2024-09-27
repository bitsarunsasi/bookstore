import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged: boolean = false;
  logUser: any;

  ngOnInit() {
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.logUser = JSON.parse(localStorage.getItem("user")!);
    if (this.logUser) {
      this.isLogged = true;
    }
  }

  accoutSignout() {
    localStorage.removeItem("user");
    this.isLogged = false;
  }
}
