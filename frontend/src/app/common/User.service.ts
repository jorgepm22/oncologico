import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public usserLogged:User;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
    if (localStorage.getItem('currentUser'))  
        return JSON.parse(localStorage.getItem('currentUser'));
    else
        return null;
  }

  removeUser(){
    localStorage.removeItem('currentUser');
  }

}