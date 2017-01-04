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
var CompetitionComponent = (function () {
    function CompetitionComponent(competitionService, route) {
        this.competitionService = competitionService;
        this.route = route;
    }
    CompetitionComponent.prototype.ngOnInit = function () {
        var competitionId = this.route.snapshot.params['id'];
        //Details van competitie ophalen
        this.competitionService.getCompetition(competitionId)
            .subscribe(function (res) { return console.log(res); });
    };
    CompetitionComponent = __decorate([
        core_1.Component({
            selector: 'competition',
            template: '<h1>Competition</h1>',
            providers: [competition_service_1.CompetitionService]
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, router_1.ActivatedRoute])
    ], CompetitionComponent);
    return CompetitionComponent;
}());
exports.CompetitionComponent = CompetitionComponent;
//Demo competition: 581a8506150ba0bd628b4579 
//# sourceMappingURL=competition.component.js.map