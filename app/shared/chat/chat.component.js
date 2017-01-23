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
var ChatComponent = (function () {
    function ChatComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../app/assets/js/chat.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            template: " \n       \n       <section id=\"chat\">\n                <div class=\"rooms\">\n                <div class=\"panel-heading paddingpanel\">ROOMS</div>\n                <div id=\"rooms\"></div>\n            </div>\n\n            <div class=\"chatbox\">\n                <div class=\"conversation\" id=\"conversation\"></div>\n                <input id=\"data\" class=\"chattext\" />\n                <button id=\"datasend\" value=\"send\"><span class=\" glyphicon glyphicon-send\"></span> </button>\n                <!--<input type=\"button\" id=\"datasend\" value=\"send\" />-->\n            </div>\n       </section>\n\n\n       <script>\n   \n\n</script>\n\n       \n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map