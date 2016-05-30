import {Component, OnInit} from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { IShow } from '../shows/show';
import { ShowService } from '../shows/shows.service';
import { StarComponent } from '../stars/star.component';

@Component({
    templateUrl : 'app/showdetail/show-detail.component.html',
    styleUrls   : ['app/showdetail/show-detail.component.css'],
    directives  : [StarComponent],
    providers   : [ShowService]
})

export class ShowDetailComponent implements OnInit{

    chkPrevious  : boolean = false;
    chkNext      : boolean = true;
    show         : IShow;
    errorMessage : string;    
    
    constructor(private _showService : ShowService,
                private _routeParams : RouteParams,
                private _router      : Router){}
    
    
    onBack(): void {
        console.log(this.show);
        this._router.navigate(['Shows',{id:this.show.genreId}]);
    }
    
    ngOnInit(){
        

        let id = +this._routeParams.get('id');                                                                  
        this._showService.getShows()
         .subscribe(
            (shows) => this.show = shows.filter(show => show.showId === id)[0],
            (error)  => this.errorMessage = <any>error 
         )
         
        this.checkPreviousShow();
        this.checkNextShow();
    }
    
    getTotalShows(){
        
    }
   
   showNext(){
      
       let id = +this._routeParams.get('id');
       console.log(id);
       id++;
       this._router.navigate(['ShowDetail',{id:id}]);
       
   }
   
   showPrevious(){
       let id = +this._routeParams.get('id');
       console.log(id);
       id--;
       this._router.navigate(['ShowDetail',{id:id}]);
   }
   
   checkPreviousShow(){
              
       let id = +this._routeParams.get('id');
              
       if( (id % 5) != 1){
           this.chkPrevious = true;
       }
       else{
         this.chkPrevious = false;
       }                       
   }
   
   checkNextShow(){
              
       let id = +this._routeParams.get('id');
              
       if((id % 5) === 0){
           this.chkNext = false;
       }
       else{
         this.chkNext = true;
       }                       
   }   
}