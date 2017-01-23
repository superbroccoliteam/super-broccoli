import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthorizationService } from '../../components/login/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authorizationService: AuthorizationService, private router: Router){}

  canActivate() {
    //Controleren als de gebruiker is ingelogd
    if(this.authorizationService.isLoggedIn()){
        //Oke, ga door naar gevraagde pagina
        return true;
    } else {
        //Niet ingelogd, doorsturen naar login-pagina
        this.router.navigate(['login']);
    }
    return this.authorizationService.isLoggedIn();
   
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}