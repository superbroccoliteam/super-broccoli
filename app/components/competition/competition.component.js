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
var competition_service_1 = require('../competitions/competition.service');
var matches_service_1 = require('../matches/matches.service');
var CompetitionComponent = (function () {
    function CompetitionComponent(competitionService, route, matchService) {
        this.competitionService = competitionService;
        this.route = route;
        this.matchService = matchService;
    }
    CompetitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var competitionId = this.route.snapshot.params['id'];
        //Details van competitie ophalen
        this.competitionService.getCompetition(competitionId)
            .subscribe(function (res) { return _this.getMatches(res); });
    };
    CompetitionComponent.prototype.getMatches = function (response) {
        var _this = this;
        this.competition = response;
        //Alle matches ophalen
        this.matchService.getMatchesOfCompetition(response["id"])
            .subscribe(function (res) { return _this.done(res); });
    };
    CompetitionComponent.prototype.done = function (responseMatches) {
        this.matches = responseMatches;
        console.log(this.matches);
    };
    CompetitionComponent.prototype.followCompetition = function () {
        //Controle als de gebruiker is ingelogd, anders doorsturen naar login pagina
        var userId = localStorage.getItem('user_id');
        var competitionId = this.competition.id.toString();
        var token = localStorage.getItem('auth_token');
        this.competitionService.followCompetition(userId, competitionId, token);
    };
    CompetitionComponent = __decorate([
        core_1.Component({
            selector: 'competition',
            template: "\n\n        <div class=\"col-lg-12\">\n\n            <div class=\"col-lg-12 panel panel-default paddingpanel\">\n            <h1>{{ competition?.name }}</h1>\n            <p><button (click)=\"followCompetition()\">Follow competition</button></p>\n                <div class=\"col-lg-12 panel-heading\">\n                    Competition details\n                </div>\n                <div class=\"col-lg-12\">\n\n\n<div class=\"col-lg-6\">\n\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">Game</label>\n            <div class=\"col-sm-8\">\n                <p class=\"form-control-static\">{{ competition?.discipline }}</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">Start Date</label>\n            <div class=\"col-sm-8\">\n                <p class=\"form-control-static\">{{ competition?.date_start }}</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">End Date</label>\n            <div class=\"col-sm-8\">\n                <p class=\"form-control-static\">{{ competition?.date_end }}</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">Satus</label>\n            <div class=\"col-sm-8\">\n                <p class=\"form-control-static\">{{ competition?.status }}</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">Rules</label>\n            <div class=\"col-sm-8\">\n                <p class=\"form-control-static\">{{ competition?.rules }}</p>\n            </div>\n        </div>\n    </form>\n\n</div>\n\n                    <div class=\"col-lg-6\">\n\n                        <form class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Match Type</label>\n                                <div class=\"col-sm-8\">\n                                    <p class=\"form-control-static\">{{ competition?.match_type }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Organization</label>\n                                <div class=\"col-sm-8\">\n                                    <p class=\"form-control-static\">{{ competition?.organization }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Prize</label>\n                                <div class=\"col-sm-8\">\n                                    <p class=\"form-control-static\">{{ competition?.prize }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Size</label>\n                                <div class=\"col-sm-8\">\n                                    <p class=\"form-control-static\">{{ competition?.size }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Description</label>\n                                <div class=\"col-sm-8\">\n                                    <p class=\"form-control-static\">{{ competition?.description }}</p>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-4 control-label\">Website</label>\n                                <div class=\"col-sm-8\">\n                                   <a href=\"#\"> <p class=\"form-control-static\">{{ competition?.website }}</p> </a>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n\n        </div>\n        <div class=\"col-lg-12 panel panel-default paddingpanel\">\n<div class=\"panel-heading \">Matches</div>\n\n             <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                            <tr class=\"tabelheader\">\n        \n                                <th>Date</th>\n                                <th>Team A </th>\n                                <th>Team B</th>\n                                <th>Status</th>\n                                <th>Score</th>\n                                <th></th>\n\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let match of matches\">\n\n                      \n                                <td   *ngIf=\"match?.length != 0\">{{ match.date }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.opponents[0].participant.name }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.opponents[1].participant.name }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.status }}</td>\n                                <td   *ngIf=\"match?.length != 0\"><span *ngIf=\"match.opponents[0].score !== null\">{{ match.opponents[0].score }}</span>  -   <span *ngIf=\"match.opponents[1].score !== null\">{{ match.opponents[1].score }}</span></td>\n                                <td   *ngIf=\"match?.length != 0\"><a href=\"#\" class=\"detailslink\"><span class=\"glyphicon glyphicon-info-sign info-icon-details\" aria-hidden=\"true\"></span>Details</a></td>\n                    \n                               \n                            </tr>\n                           \n                            </tbody>\n                        </table>\n                    </div>\n\n\n\n        </div>\n\n\n\n\n\n\n\n    ",
            providers: [competition_service_1.CompetitionService, matches_service_1.MatchService]
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, router_1.ActivatedRoute, matches_service_1.MatchService])
    ], CompetitionComponent);
    return CompetitionComponent;
}());
exports.CompetitionComponent = CompetitionComponent;
//Demo competition: 581a8506150ba0bd628b4579 
//# sourceMappingURL=competition.component.js.map