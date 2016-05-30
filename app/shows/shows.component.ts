import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { IShow } from './show';
import { ShowService } from './shows.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({

    templateUrl : 'app/shows/shows.component.html',
    styleUrls   : ['app/shows/shows.component.css'],        
    directives  : [ROUTER_DIRECTIVES],
    providers   : [ShowService]
})

export class ShowsComponent implements OnInit{
    
    shows        : IShow[];    
    userVoted    : boolean =  false;    
    errorMessage : string;
    
    constructor(private _showService : ShowService,
                private _routeParams : RouteParams,
                private _router      : Router){}
    
    sortShows(){
        
        this.shows.sort(
             function(a: IShow, b: IShow){
                 console.log(a,b);
                 let temp;
                 let result =  b.showVotes - a.showVotes
                 if(result > 0)
                 {
                   temp = b.showRank;
                   b.showRank = a.showRank;
                   a.showRank = temp;
                 }
                 console.log(result);        
                 return result; 
            });
         
         
        return this.shows;
    }
    
    ngOnInit(){
        //.filter(show => show.showId === this.showId)[0],
        let genreId = +this._routeParams.get('id');
        this._showService.getShows()
                .subscribe(
                    (shows) => this.shows = shows.filter(show => show.genreId === genreId),
                    (error)  => this.errorMessage = <any>error 
                )
    }
    
    VoteUp(show:IShow){
        console.log(show);  
        show.showVotes ++;
        this.userVoted = true;
        return false;
    }
    
    VoteDown(show:IShow){
        console.log(show);  
        show.showVotes --;
        this.userVoted = false;
        return false;
    }
}