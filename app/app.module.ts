import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent }  from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { CalendarComponent } from './shared/calendar-widget/calendar.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule 
  ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, SidebarComponent, CalendarComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
