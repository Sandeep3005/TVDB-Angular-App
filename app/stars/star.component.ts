import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector    : 'star',
    templateUrl : 'app/stars/star.component.html',
    styleUrls   : ['app/stars/star.component.css']   
    
})

export class StarComponent implements OnChanges{
    
    @Input() rating:number ;
    starWidth:number;
    
    ngOnChanges(){
        this.starWidth = this.rating * 27;
        console.log(this.starWidth);
    }
    
    onClick(){
        
    }
}