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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AuthorizationService = (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.loggedIn = false;
        this.url = "https://nameless-harbor-45973.herokuapp.com/authorization/login";
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AuthorizationService.prototype.login = function (email, password) {
        var _this = this;
        var body = 'email=' + email + '&password=' + password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(this.url, body, {
            headers: headers
        })
            .subscribe(function (data) {
            localStorage.setItem('auth_token', data.json()["token"]);
            localStorage.setItem('user_id', data.json()["_id"]);
            _this.loggedIn = true;
            window.location.reload();
        });
    };
    AuthorizationService.prototype.getUserById = function (id, token) {
        var url = "https://nameless-harbor-45973.herokuapp.com/user/" + id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', token);
        return this.http
            .get(url, {
            headers: headers
        })
            .map(function (data) { return data.json(); });
    };
    AuthorizationService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    AuthorizationService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map