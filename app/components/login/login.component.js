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
;
var authorization_service_1 = require('./authorization.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log("login");
        this.authorizationService.login("admin@admin.be", "Password-1");
    };
    LoginComponent.prototype.onClick = function () {
        var email = document.getElementById("txtEmail").value;
        var password = document.getElementById("txtPassword").value;
        //Credentials controleren
        this.authorizationService.login(email, password);
        if (this.authorizationService.isLoggedIn()) {
            this.router.navigate(['profile']);
        }
        else {
            alert("Email and/or password not correct");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'competitions',
            template: " \n        <h1>Login</h1>\n        <input id=\"txtEmail\" type=\"text\" placeholder=\"email\" />\n        <input id=\"txtPassword\" type=\"password\" placeholder=\"password\" />\n        <button (click)=\"onClick()\">Log in </button>\n        \n    ",
            providers: [authorization_service_1.AuthorizationService]
        }), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map