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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./shared/navbar/navbar.component');
var home_component_1 = require('./components/home/home.component');
var sidebar_component_1 = require('./shared/sidebar/sidebar.component');
var calendar_component_1 = require('./shared/calendar-widget/calendar.component');
var matches_component_1 = require('./components/matches/matches.component');
var competitions_component_1 = require('./components/competitions/competitions.component');
var games_component_1 = require('./components/games/games.component');
var calendar_item_component_1 = require('./shared/calendar-widget/calendar-item.component');
var slider_component_1 = require('./components/slider/slider.component');
var news_component_1 = require('./components/news/news.component');
var news_item_component_1 = require('./components/news-item/news-item.component');
var competition_component_1 = require('./components/competition/competition.component');
var login_component_1 = require('./components/login/login.component');
var auth_guard_service_1 = require('./shared/guards/auth-guard.service');
var profile_component_1 = require('./components/profile/profile.component');
var authorization_service_1 = require('./components/login/authorization.service');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'matches', component: matches_component_1.MatchesComponent },
    { path: 'competitions', component: competitions_component_1.CompetitionsComponent },
    { path: 'competition/:id', component: competition_component_1.CompetitionComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'games', component: games_component_1.GamesComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: '', component: home_component_1.HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                sidebar_component_1.SidebarComponent,
                calendar_component_1.CalendarComponent,
                matches_component_1.MatchesComponent,
                competitions_component_1.CompetitionsComponent,
                games_component_1.GamesComponent,
                calendar_item_component_1.CalendarItemComponent,
                slider_component_1.SliderComponent,
                news_component_1.NewsComponent,
                news_item_component_1.NewsItemComponent,
                competition_component_1.CompetitionComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent
            ],
            providers: [auth_guard_service_1.AuthGuard, authorization_service_1.AuthorizationService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map