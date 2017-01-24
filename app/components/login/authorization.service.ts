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
                localStorage.setItem('user_id', data.json()["_id"]);
                 this.loggedIn = true;
                 window.location.reload();
          });

  }

register(first_name: string, last_name: string, email: string, password: string, nickname: string, sports: String ){
      var body = 'first_name='+first_name+'&last_name='+last_name+'&email='+email+'&password='+password+'&nickname='+nickname+'&sports='+sports;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      var url = "https://nameless-harbor-45973.herokuapp.com/authorization/register"

      this.http
        .post(this.url,
          body, {
            headers: headers
          })
          .subscribe(data => {
            console.log(data);
                 window.location.reload();
          });

  }


  getUserById(id: string, token: string){
    var url = "https://nameless-harbor-45973.herokuapp.com/user/" + id;
    var headers = new Headers();
   
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization',token);

    return this.http
        .get(url,
          {
            headers: headers
          })
          .map(data => data.json());

  }


  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn(){
      return this.loggedIn;
  }



}

