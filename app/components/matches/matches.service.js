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
var MatchService = (function () {
    function MatchService(http) {
        this.http = http;
    }
    //Alle competities ophalen
    MatchService.prototype.getMatchesOfCompetition = function (competitionId) {
        //Matches binnen een competitie ophalen
        var url = "https://api.toornament.com/v1/tournaments/" + competitionId + "/matches?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    MatchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MatchService);
    return MatchService;
}());
exports.MatchService = MatchService;
//Key: iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs 
//# sourceMappingURL=matches.service.js.map