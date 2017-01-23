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


    constructor (private http: Http){ }

    //Alle competities ophalen
    
    getMatchesOfCompetition(competitionId: number){
        //Matches binnen een competitie ophalen
       var url = "https://api.toornament.com/v1/tournaments/"+competitionId+"/matches?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs"

       return this.http.get(url)
            .map(res => res.json());

    }

}

//Key: iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs