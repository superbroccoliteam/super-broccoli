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
var competition_service_1 = require('./competition.service');
var CompetitionsComponent = (function () {
    function CompetitionsComponent(competitionService) {
        this.competitionService = competitionService;
    }
    CompetitionsComponent.prototype.ngOnInit = function () {
        this.getCompetitions();
    };
    CompetitionsComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.competitionService.getCompetitions()
            .subscribe(function (res) { return _this.competitions = res; });
    };
    CompetitionsComponent = __decorate([
        core_1.Component({
            selector: 'competitions',
            template: " \n        <h1>Competitions</h1>\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Competition</th>\n                        <th>Size</th>\n                        <th>Start date</th>\n                        <th>End date</th>\n                        <th>Status</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let competition of competitions\" >\n                        <td>{{ competition.name }}</td>\n                        <td>{{ competition.size }}</td>\n                        <td>{{ competition.date_start }}</td>\n                        <td>{{ competition.date_end }}</td>\n                        <td>{{ competition.status }}</td>\n                        <td><a href=\"#\" class=\"detailslink\"><span class=\"glyphicon glyphicon-info-sign info-icon-details\" aria-hidden=\"true\"></span>Details</a></td>\n                    </tr>\n                </tbody>\n            </table>\n            </div>\n    ",
            providers: [competition_service_1.CompetitionService]
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService])
    ], CompetitionsComponent);
    return CompetitionsComponent;
}());
exports.CompetitionsComponent = CompetitionsComponent;
//# sourceMappingURL=competitions.component.js.map