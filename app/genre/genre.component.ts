import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { IGenre } from './genre';
import { GenreService } from './genre.service';

@Component({
    selector    : 'genre',    
    templateUrl : 'app/genre/genre.component.html',
    styleUrls   : ['app/genre/genre.component.css'],
    directives  : [ROUTER_DIRECTIVES]
})

export class GenreComponent implements OnInit{
    
    genres       : IGenre[];
    errorMessage : string;
    
    constructor(private _genreService:GenreService){}
    
    ngOnInit(){
        this._genreService.getGenres()
                .subscribe(
                    (genres) => this.genres = genres,
                    (error)  => this.errorMessage = <any>error 
                )
    }
}