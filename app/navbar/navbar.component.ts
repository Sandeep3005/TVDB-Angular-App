import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector    : 'navbar',
    templateUrl : 'app/navbar/navbar.component.html',
    styleUrls   : ['app/navbar/navbar.component.css'],
    directives  : [ROUTER_DIRECTIVES]
})

export class NavbarComponent{
    
}