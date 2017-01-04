"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authorization_service_1 = require('../../components/login/authorization.service');
var AuthGuard = (function () {
    function AuthGuard(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        //Controleren als de gebruiker is ingelogd
        if (this.authorizationService.isLoggedIn()) {
            //Oke, ga door naar gevraagde pagina
            return true;
        }
        else {
            //Niet ingelogd, doorsturen naar login-pagina
            this.router.navigate(['login']);
        }
        return this.authorizationService.isLoggedIn();
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map