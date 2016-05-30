import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import { IGenre } from './genre';

@Injectable()

export class GenreService{
    
    private _genreUrl:string = "api/genre/genres.json";
    
    constructor(private _http:Http){
    }    
    
    getGenres(): Observable<IGenre[]>{
        return this._http.get(this._genreUrl)
                    .map((response: Response) => <IGenre[]>response.json())
                    //.do(data =>  console.log("All "+ JSON.stringify(data)))
                    .catch(this.handleError);
    }
    
    private handleError(error : Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }   
}