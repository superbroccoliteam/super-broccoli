import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../components/login/authorization.service';

@Component({
    selector: 'navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html'
})

export class NavbarComponent{
      username: string;

      constructor(private authorizationService: AuthorizationService){}

      ngOnInit(){

          //Is er een gebruiker ingelogd?
          if(this.authorizationService.isLoggedIn()){
                this.printUserName();
          } else {
            
              this.username = null;
          }
        
  }

  //Gebruikersinformatie ophalen
  printUserName(){
    var userId = localStorage.getItem('user_id');
    var token = localStorage.getItem('auth_token');
    
    this.authorizationService.getUserById(userId, token)
            .subscribe(res => this.handleUsername(res))
  }

  handleUsername(res){
      this.username = res["nickname"];
      console.log(this.username);
  }

  
}