import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../common/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private loginService: LoginService, private userService: UserService,
     private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe( 
      res => {
        let u: User = {username: this.email, password:this.password, token: res.toString()};        
        this.userService.setUserLoggedIn(u);
        this.navigate();
      },
      error => {
        console.error(error);
      },
    );
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
  
}
