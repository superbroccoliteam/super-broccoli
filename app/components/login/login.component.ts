import {Component, OnInit} from '@angular/core';;
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router'


@Component({
    selector: 'competitions',
    template: ` 
        <div id="header">Log in right here</div>

            <form id="formlogin">
            <div class="form-group">
                <label for="Email">Email address</label>
                <input type="email" class="form-control" id="Email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="Pass">Password</label>
                <input type="password" class="form-control" id="Pass" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-default">Login</button>
            <div class="form-group" id="registerbutton">
                <label for="registernow">Nog geen Account? Registreer hier!</label> <br/>
                <button routerLink="/register" class="btn btn-default"id="registernow">Register</button>
            </div>


        </form>
        
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