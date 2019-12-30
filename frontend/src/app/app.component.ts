import { Component } from '@angular/core';
import { UserService } from './common/User.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userSaved : User = null;

  constructor( private userService: UserService ) {
    this.userSaved = this.userService.getUserLoggedIn();
  }


  title = 'frontend';
}
