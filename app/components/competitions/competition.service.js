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
var CompetitionService = (function () {
    function CompetitionService(http, jsonP) {
        this.http = http;
        this.jsonP = jsonP;
        this.url = "https://api.toornament.com/v1/tournaments?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
    }
    CompetitionService.prototype.getCompetitions = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    CompetitionService.prototype.getCompetition = function (competitionId) {
        var competitionUrl = "https://api.toornament.com/v1/tournaments/" + competitionId + "?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
        console.log(competitionUrl);
        return this.http.get(competitionUrl)
            .map(function (res) { return res.json(); });
    };
    CompetitionService.prototype.followCompetition = function (userId, competitionId, token) {
        var competitionUrl = "https://nameless-harbor-45973.herokuapp.com/user/addcompetition";
        var body = 'competitionId=' + competitionId;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', token);
        this.http
            .post(competitionUrl, body, {
            headers: headers
        })
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    CompetitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], CompetitionService);
    return CompetitionService;
}());
exports.CompetitionService = CompetitionService;
//Key: iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs 
//# sourceMappingURL=competition.service.js.map