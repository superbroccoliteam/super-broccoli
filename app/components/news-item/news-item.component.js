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
var NewsItemComponent = (function () {
    function NewsItemComponent() {
    }
    NewsItemComponent = __decorate([
        core_1.Component({
            selector: 'news-item',
            template: " \n    \n    <div class=\"row\">\n         <div class=\"col-sm-4\"><a href=\"#\" class=\"\"><img src=\"http://placehold.it/1280X720\" class=\"img-responsive\"></a>\n            </div>\n            <div class=\"col-sm-8\">\n                <h3 class=\"title\">How to Fight Fraud with Artificial Intelligence and Intelligent Analytics</h3>\n                <p class=\"text-muted\">3 december 2016</p>\n                <p>Could artificial intelligence have been used to prevent the high-profile Target breach? The concept is not so far-fetched. Organizations such as Mastercard and RBS WorldPay have long relied on artificial intelligence to detect fraudulent transaction patterns and prevent card.</p>\n\n                <p class=\"text-muted\">Presented by <a href=\"#\">Ellen Richey</a></p>\n\n            </div>\n    </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewsItemComponent);
    return NewsItemComponent;
}());
exports.NewsItemComponent = NewsItemComponent;
//# sourceMappingURL=news-item.component.js.map