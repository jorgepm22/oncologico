import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user:string, pass:string) {
    const params = new HttpParams()
    .set('username', user)
    .set('password', pass);    
    return this.http.post('http://localhost:3000/api/auth?username='+user+'&password='+pass,null);    
  }

}