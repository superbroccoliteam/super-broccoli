import {Component, OnInit} from '@angular/core';;
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router'


@Component({
    selector: 'competitions',
    template: ` 
        <h1>Login</h1>
        <input id="txtEmail" type="text" placeholder="email" />
        <input id="txtPassword" type="password" placeholder="password" />
        <button (click)="onClick()">Log in </button>
        
    `,
    providers: [AuthorizationService]
})

export class LoginComponent{

    constructor(private authorizationService: AuthorizationService, private router: Router) {}
    
    ngOnInit() { 
       
       
    }

    login(){
        console.log("login");
         this.authorizationService.login("admin@admin.be", "Password-1");
    }

    onClick(){
        var email = (<HTMLInputElement>document.getElementById("txtEmail")).value;
        var password = (<HTMLInputElement>document.getElementById("txtPassword")).value;
        
        //Credentials controleren
       this.authorizationService.login(email,password);

       if(this.authorizationService.isLoggedIn()){
          this.router.navigate(['profile']);
       } else {
           alert("Email and/or password not correct");
       }


        
    }


}