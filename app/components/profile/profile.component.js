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
var authorization_service_1 = require('../login/authorization.service');
var competition_service_1 = require('../competitions/competition.service');
var router_1 = require('@angular/router');
var ProfileComponent = (function () {
    function ProfileComponent(authorizationService, router, competitionService) {
        this.authorizationService = authorizationService;
        this.router = router;
        this.competitionService = competitionService;
        this.competitions = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //Is er een gebruiker ingelogd?
        if (this.authorizationService.isLoggedIn()) {
            //OK, toon gevolgde competities
            this.getFollowedCompetitions();
        }
        else {
            //Gebruiker is niet ingelogd, naar login pagina sturen
            this.router.navigate(['login']);
        }
    };
    ProfileComponent.prototype.getFollowedCompetitions = function () {
        var _this = this;
        var userId = localStorage.getItem('user_id');
        var token = localStorage.getItem('auth_token');
        this.authorizationService.getUserById(userId, token)
            .subscribe(function (res) { return _this.handleFollowedCompetitions(res["competitions"]); });
    };
    ProfileComponent.prototype.handleFollowedCompetitions = function (res) {
        var _this = this;
        //Elke competitie in res overlopen en naam ophalen
        console.log(res);
        for (var _i = 0; _i < res.length; _i++) {
            var competitionId = res[_i];
            this.competitionService.getCompetition(competitionId)
                .subscribe(function (data) { return _this.done(data); });
        }
    };
    ProfileComponent.prototype.done = function (data) {
        this.competitions.push(data);
        console.log(this.competitions);
    };
    ProfileComponent.prototype.unfollowCompetition = function (id) {
        var userId = localStorage.getItem('user_id');
        var token = localStorage.getItem('auth_token');
        console.log("unfollow");
        this.competitionService.unfollowCompetition(id.toString(), token);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProfileComponent.prototype, "competitions", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'competitions',
            template: " \n        <div class=\"container-fluid\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"col-lg-12 panel panel-default paddingpanel\">\n            <div class=\"panel-heading\">Nickname</div>\n            <div class=\"col-lg-4\">\n                <img src=\"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg\" class=\"img-thumbnail\">\n\n            </div>\n            <div class=\"col-lg-8\">\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Naam</label>\n                        <div class=\"col-sm-10\">\n                            <p class=\"form-control-static\">Joske Vermeulen</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Leeftijd</label>\n                        <div class=\"col-sm-10\">\n                            <p class=\"form-control-static\">16 jaar</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Locatie</label>\n                        <div class=\"col-sm-10\">\n                            <p class=\"form-control-static\">Belgie</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Social Media</label>\n                        <div class=\"col-sm-10\">\n\n                            <a class=\"col-lg-2 col-sm-4 col-xs-4\" href=\"#\"><img src=\"http://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700\" class=\"img-thumbnail\"></a>\n\n                            <a class=\"col-lg-2 col-sm-4 col-xs-4\" href=\"#\"><img src=\"http://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700\" class=\"img-thumbnail\"></a>\n\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n\n\n\n        </div>\n\n\n       <div class=\"row col-lg-12 panel panel-default paddingpanel\">\n<div class=\"panel-heading\">Gamelist</div>\n            <div class=\"col-lg-12\">\n\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n                <a class=\"col-lg-2 col-sm-6 col-xs-6 gamelist\" href=\"#\"><img src=\"https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg\" class=\"img-thumbnail game\"></a>\n\n\n\n            </div>\n        </div>\n\n         <div class=\"row col-lg-12 panel panel-default paddingpanel\">\n<div class=\"panel-heading\">Followed Competitions</div>\n\n         <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Competition</th>\n                        <th>Discipline</th>\n                        <th>Size</th>\n                        <th>Start date</th>\n                        <th>End date</th>\n                        <th>Status</th>\n                        <th></th>\n                        <th>Unfollow</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let competition of competitions\" >\n                        <td>{{ competition?.name }}</td>\n                        <td>{{ competition?.discipline }}</td>\n                        <td>{{ competition?.size }}</td>\n                        <td>{{ competition?.date_start }}</td>\n                        <td>{{ competition?.date_end }}</td>\n                        <td>{{ competition?.status }}</td>\n                        <td><a [routerLink]=\"['/competition', competition?.id]\" class=\"detailslink\"><span class=\"glyphicon glyphicon-info-sign info-icon-details\" aria-hidden=\"true\"></span>Details</a></td>\n                        <td><a (click)=\"unfollowCompetition(competition.id)\" >Unfollow</a></td>\n                    </tr>\n                </tbody>\n            </table>\n            </div>\n\n            </div>\n\n            </div>\n       \n    ",
            providers: [competition_service_1.CompetitionService]
        }), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService, router_1.Router, competition_service_1.CompetitionService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map