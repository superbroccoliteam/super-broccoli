import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorizationService{
  private loggedIn = false;

  
  private url = "https://nameless-harbor-45973.herokuapp.com/authorization/login";

  constructor (private http: Http){
      this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string){
      var body = 'email='+email+'&password='+password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http
        .post(this.url,
          body, {
            headers: headers
          })
          .subscribe(data => {
                localStorage.setItem('auth_token', data.json()["token"]);
                 this.loggedIn = true;
          });

          
        
  }


  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn(){
      return this.loggedIn;
  }



}

