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
var competition_service_1 = require('../competitions/competition.service');
var matches_service_1 = require('./matches.service');
var MatchesComponent = (function () {
    function MatchesComponent(competitionService, matchService) {
        this.competitionService = competitionService;
        this.matchService = matchService;
    }
    MatchesComponent.prototype.ngOnInit = function () {
        //Competities ophalen en variabele vullen
        this.getCompetitions();
    };
    MatchesComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.competitionService.getCompetitions()
            .subscribe(function (res) { return _this.getMatches(res); } //this.competitions = res
        );
    };
    MatchesComponent.prototype.getMatches = function (competitionResult) {
        console.log(competitionResult);
        for (var i = 0; i <= competitionResult.length; i++) {
            this.getMatchesOfCompetition(competitionResult[i]["id"]);
        }
    };
    MatchesComponent.prototype.getMatchesOfCompetition = function (competitionId) {
        var _this = this;
        this.matchService.getMatchesOfCompetition(competitionId)
            .subscribe(function (res) { return _this.fillMatchesArray(res); } //this.matches.push(res) //this.competitions = res
        );
    };
    MatchesComponent.prototype.fillMatchesArray = function (matchesResult) {
        var arrMatches;
        arrMatches.push(matchesResult);
        console.log(arrMatches);
        this.matches.push(arrMatches[0]);
    };
    MatchesComponent = __decorate([
        core_1.Component({
            selector: 'matches',
            template: " \n     <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Competition</th>\n                        <th>Discipline</th>\n                        <th>Size</th>\n                        <th>Start date</th>\n                        <th>End date</th>\n                        <th>Status</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let match of (matches | async)\">\n\n                      <td   *ngIf=\"match?.length != 0\">{{ match.discipline }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.date }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.opponents[0].participant.name }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.opponents[1].participant.name }}</td>\n                                <td   *ngIf=\"match?.length != 0\">{{ match.status }}</td>\n                                <td   *ngIf=\"match?.length != 0\"><span *ngIf=\"match.opponents[0].score !== null\">{{ match.opponents[0].score }}</span>  -   <span *ngIf=\"match.opponents[1].score !== null\">{{ match.opponents[1].score }}</span></td>\n                                <td   *ngIf=\"match?.length != 0\"><a href=\"#\" class=\"detailslink\"><span class=\"glyphicon glyphicon-info-sign info-icon-details\" aria-hidden=\"true\"></span>Details</a></td>\n                    \n                               \n                            </tr>\n                </tbody>\n            </table>\n            </div>\n     ",
            providers: [competition_service_1.CompetitionService, matches_service_1.MatchService]
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, matches_service_1.MatchService])
    ], MatchesComponent);
    return MatchesComponent;
}());
exports.MatchesComponent = MatchesComponent;
//# sourceMappingURL=matches.component.js.map