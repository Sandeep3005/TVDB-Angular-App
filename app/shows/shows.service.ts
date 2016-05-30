import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import { IShow } from './show';

@Injectable()

export class ShowService{
    
    private _showUrl:string = "api/shows/shows.json";
    
    constructor(private _http:Http){
    }    

    getShows(): Observable<IShow[]>{
        return this._http.get(this._showUrl)
                    .map((response: Response) => <IShow[]>response.json())
                    .do(data =>  console.log("All "+ JSON.stringify(data)))
                    .catch(this.handleError);
    }
    
    private handleError(error : Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }   
}