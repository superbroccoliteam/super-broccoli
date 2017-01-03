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
var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            template: " \n    \n    <div class=\"slideshow-container\">\n\n            <div class=\"mySlides fading\">\n                <div class=\"numbertext\">1 / 3</div>\n                <img src=\"http://gamewires.com/Images/Posts/48007_banner.jpg\" style=\"width:100%\">\n                <div class=\"text\">Fifa 17</div>\n            </div>\n\n            <div class=\"mySlides fading\">\n                <div class=\"numbertext\">2 / 3</div>\n                <img src=\"http://www.psnation.com/wp-content/uploads/2016/05/call-of-duty-infinite-warfare-banner.png\" style=\"width:100%\">\n                <div class=\"text\">Infinite Warfare</div>\n            </div>\n\n            <div class=\"mySlides fading\">\n                <div class=\"numbertext\">3 / 3</div>\n                <img src=\"http://telkomgaming.co.za/wp-content/uploads/2016/05/Overwatch-Banner-1-800x277.png\" style=\"width:100%\">\n                <div class=\"text\">Overwatch</div>\n            </div>\n\n            <a class=\"prev\" onclick=\"plusSlides(-1)\">\u276E</a>\n            <a class=\"next\" onclick=\"plusSlides(1)\">\u276F</a>\n\n    </div>\n\n    <br />\n\n        <div style=\"text-align:center\">\n            <span class=\"dot\" onclick=\"currentSlide(1)\"></span>\n            <span class=\"dot\" onclick=\"currentSlide(2)\"></span>\n            <span class=\"dot\" onclick=\"currentSlide(3)\"></span>\n        </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map