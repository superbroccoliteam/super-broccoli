import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Match } from './Match';
import { Competition } from '../competitions/Competition';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService{
    //Variabelen
    matches: Match[];

    private url = "https://api.toornament.com/v1/tournaments/{tournament_id}/matches?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";

    constructor (private http: Http){ }

    //Alle competities ophalen
    
    getMatches(competitions: any){
        //Lijst van alle competities als parameter
        //Alle competities overlopen
        for (let competition of competitions){
            
            //URL voor match samenstellen
            var url = "https://api.toornament.com/v1/tournaments/"+competition.id+"/matches?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
            console.log(url);
            return this.http.get(url)
                .map(res => console.log(res)) //this.matches.push(res.json())
        }

       
       
    }

}

//Key: iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs