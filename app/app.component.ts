import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import 'rxjs/Rx';   //Load all features of Reactive Extensions

import { NavbarComponent } from './navbar/navbar.component';
import { GenreComponent } from './genre/genre.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailComponent } from './showdetail/show-detail.component';

import { GenreService } from './genre/genre.service';



@Component({
    selector:'app-start',
    template:
    `<navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>    
    `,
    directives : [ NavbarComponent, ROUTER_DIRECTIVES ],
    providers  : [ GenreService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
  {
      path : '/', name:'Home', component: GenreComponent, useAsDefault:true
  },
  {
      path : '/shows/:id', name:'Shows', component: ShowsComponent
  },
  {
      path : '/show-detail/:id', name:'ShowDetail', component: ShowDetailComponent
  }       
])

export class AppComponent{
    
}