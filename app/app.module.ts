import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CalendarComponent } from './shared/calendar-widget/calendar.component';
import { MatchesComponent } from './components/matches/matches.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { GamesComponent } from './components/games/games.component';
import { CalendarItemComponent } from './shared/calendar-widget/calendar-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { CompetitionComponent } from './components/competition/competition.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'matches', component: MatchesComponent},
  { path: 'competitions', component: CompetitionsComponent},
  { path: 'competition/:id', component: CompetitionComponent}
  { path: 'games', component: GamesComponent},
  { path: '', component: HomeComponent }
]

@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule ,
    HttpModule,
    JsonpModule
  ],
  declarations: [ 
  AppComponent, 
  NavbarComponent, 
  HomeComponent,
  SidebarComponent, 
  CalendarComponent,
  MatchesComponent,
  CompetitionsComponent,
  GamesComponent,
  CalendarItemComponent,
  SliderComponent,
  NewsComponent,
  NewsItemComponent,
  CompetitionComponent
 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
