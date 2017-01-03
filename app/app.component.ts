import { Component } from '@angular/core';
import {NavbarComponent} from './shared/navbar/navbar.component'

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="container-fluid">
      <div class="col-lg-8">
        <router-outlet></router-outlet>
      </div>
      
      <div class="col-lg-3">
        <sidebar></sidebar>
      </div>
    </div>
  `
})
export class AppComponent  { name = 'Angular'; }
