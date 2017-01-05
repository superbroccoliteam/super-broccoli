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
var NewsItem_1 = require('../news/NewsItem');
var NewsItemComponent = (function () {
    function NewsItemComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', NewsItem_1.NewsItem)
    ], NewsItemComponent.prototype, "newsItem", void 0);
    NewsItemComponent = __decorate([
        core_1.Component({
            selector: 'news-item',
            template: " \n    \n   \n   <div class=\"news col-lg-4 col-sm-6\">\n         <div class=\"col-lg-12\"><a href=\"{{ newsItem.url }}\" class=\"\"><img src=\"{{ newsItem.urlToImage || 'app/assets/img/IGN-Logo.jpg' }}\" class=\"img-responsive\"></a>\n            </div>\n            <div class=\"col-lg-12\">\n                <h3 class=\"title\"><a href=\"{{ newsItem.url }}\">{{ newsItem.title }}</a></h3>\n                <p class=\"text-muted\">3 december 2016</p>\n                <p>{{ newsItem.description }}</p>\n\n                <p class=\"text-muted\">Presented by {{ newsItem.author }}</p>\n\n            </div>\n   </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewsItemComponent);
    return NewsItemComponent;
}());
exports.NewsItemComponent = NewsItemComponent;
//# sourceMappingURL=news-item.component.js.map