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
var authorization_service_1 = require('../../components/login/authorization.service');
var NavbarComponent = (function () {
    function NavbarComponent(authorizationService) {
        this.authorizationService = authorizationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //Is er een gebruiker ingelogd?
        if (this.authorizationService.isLoggedIn()) {
            this.printUserName();
        }
        else {
            this.username = null;
        }
    };
    //Gebruikersinformatie ophalen
    NavbarComponent.prototype.printUserName = function () {
        var _this = this;
        var userId = localStorage.getItem('user_id');
        var token = localStorage.getItem('auth_token');
        this.authorizationService.getUserById(userId, token)
            .subscribe(function (res) { return _this.handleUsername(res); });
    };
    NavbarComponent.prototype.handleUsername = function (res) {
        this.username = res["nickname"];
        console.log(this.username);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/shared/navbar/navbar.component.html'
        }), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map