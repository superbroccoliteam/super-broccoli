import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Competition } from './Competition';
import 'rxjs/add/operator/map'


@Injectable()
export class CompetitionService{
    private url = "https://api.toornament.com/v1/tournaments?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
    

    constructor (private http: Http, private jsonP: Jsonp){ }

    getCompetitions(){
        return this.http.get(this.url)
            .map(res => res.json());
    }

    getCompetition(competitionId: number){
        var competitionUrl = "https://api.toornament.com/v1/tournaments/"+competitionId+"?api_key=iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs";
       
        console.log(competitionUrl);

        
        return this.http.get(competitionUrl)
            .map(res => res.json());
    }

}

//Key: iTIf7Qaq_YqyV0z76Pw_I0qiJsgY3Jemu53LqMo8Yrs