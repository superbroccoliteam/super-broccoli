import {Component, OnInit} from '@angular/core';;


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
                    <input type="email" class="form-control" id="Email" placeholder="Email">
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

                <button id="register" type="submit" class="btn btn-default">Register</button>

                <div class="form-group">
                <label for="loginnow">Already have an account? </label> <br/>
                <button routerLink="/login" id="loginnow" class="btn btn-default">Login</button>
            </div>
            </form>
        
    `
})

export class RegistrationComponent{

    


}