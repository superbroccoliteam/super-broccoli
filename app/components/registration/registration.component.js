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
var authorization_service_1 = require('../login/authorization.service');
var router_1 = require('@angular/router');
var RegistrationComponent = (function () {
    function RegistrationComponent(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    RegistrationComponent.prototype.formSubmit = function () {
        var firstName = document.getElementById("FirstName").value;
        var lastname = document.getElementById("LastName").value;
        var email = document.getElementById("txtEmail").value;
        var password = document.getElementById("Pass").value;
        var nickname = document.getElementById("Nickname").value;
        var sports = "1,2";
        this.authorizationService.register(firstName, lastname, email, password, nickname, sports);
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            template: " \n\n        <div id=\"header\">Register on Esportz for free</div>\n\n            <form id=\"formregister\">\n                <div class=\"form-group\">\n                    <label for=\"FirstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"FirstName\" placeholder=\"Jane\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"LastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"LastName\" placeholder=\"Doe\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Email\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"txtEmail\" placeholder=\"Email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Pass\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"Pass\" placeholder=\"Password\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Your Favorite Sports</label>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"league\">League of Legends</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"fifa\">FIFA</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"starcraft\" disabled>Starcraft</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"csgo\">CSGO</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"hearthstone\">Hearthstone</label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" value=\"dota\">Dota</label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Nickname\">Nickname</label>\n                    <input type=\"text\" class=\"form-control\" id=\"Nickname\" placeholder=\"Gamer69\">\n                </div>\n\n                <button (click)=formSubmit() id=\"register\" type=\"submit\" class=\"btn btn-default\">Register</button>\n\n                <div class=\"form-group\">\n                <label for=\"loginnow\">Already have an account? </label> <br/>\n                <button routerLink=\"/login\" id=\"loginnow\" class=\"btn btn-default\">Login</button>\n            </div>\n            </form>\n        \n    ",
            providers: [authorization_service_1.AuthorizationService]
        }), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map