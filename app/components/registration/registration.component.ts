import {Component, OnInit} from '@angular/core';;
import {AuthorizationService} from '../login/authorization.service';
import {Router} from '@angular/router';


@Component({
    selector: 'registration',
    template: ` 

        <div id="header">Register on Esportz for free</div>

            <form id="formregister">
                <div class="form-group">
                    <label for="FirstName">First Name</label>
                    <input type="text" class="form-control" id="FirstName" placeholder="Jane">
                </div>
                <div class="form-group">
                    <label for="LastName">Last Name</label>
                    <input type="text" class="form-control" id="LastName" placeholder="Doe">
                </div>
                <div class="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" class="form-control" id="txtEmail" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="Pass">Password</label>
                    <input type="password" class="form-control" id="Pass" placeholder="Password">
                </div>

                <div class="form-group">
                    <label>Your Favorite Sports</label>
                    <div class="checkbox">
                        <label><input type="checkbox" value="league">League of Legends</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="fifa">FIFA</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="starcraft" disabled>Starcraft</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="csgo">CSGO</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="hearthstone">Hearthstone</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="dota">Dota</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="Nickname">Nickname</label>
                    <input type="text" class="form-control" id="Nickname" placeholder="Gamer69">
                </div>

                <button (click)=formSubmit() id="register" type="submit" class="btn btn-default">Register</button>

                <div class="form-group">
                <label for="loginnow">Already have an account? </label> <br/>
                <button routerLink="/login" id="loginnow" class="btn btn-default">Login</button>
            </div>
            </form>
        
    `,
    providers: [AuthorizationService]
})

export class RegistrationComponent{

    constructor(private authorizationService: AuthorizationService, private router: Router){}

    formSubmit(){
        var firstName = (<HTMLInputElement>document.getElementById("FirstName")).value;
        var lastname = (<HTMLInputElement>document.getElementById("LastName")).value;
        var email = (<HTMLInputElement>document.getElementById("txtEmail")).value;
        var password = (<HTMLInputElement>document.getElementById("Pass")).value;
        var nickname = (<HTMLInputElement>document.getElementById("Nickname")).value;

        var sports = "1,2";

        this.authorizationService.register(
            firstName,
            lastname,
            email,
            password,
            nickname,
            sports
        )

    }

   

}