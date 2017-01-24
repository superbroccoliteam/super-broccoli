import {Component, OnInit} from '@angular/core';
import {CompetitionService} from '../competitions/competition.service';
import {Competition} from '../competitions/Competition';
import {Match} from './Match';
import {MatchService} from './matches.service';


@Component({
    selector: 'matches',
    template: ` 
     <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Competition</th>
                        <th>Discipline</th>
                        <th>Size</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let match of (matches | async)">

                      <td   *ngIf="match?.length != 0">{{ match.discipline }}</td>
                                <td   *ngIf="match?.length != 0">{{ match.date }}</td>
                                <td   *ngIf="match?.length != 0">{{ match.opponents[0].participant.name }}</td>
                                <td   *ngIf="match?.length != 0">{{ match.opponents[1].participant.name }}</td>
                                <td   *ngIf="match?.length != 0">{{ match.status }}</td>
                                <td   *ngIf="match?.length != 0"><span *ngIf="match.opponents[0].score !== null">{{ match.opponents[0].score }}</span>  -   <span *ngIf="match.opponents[1].score !== null">{{ match.opponents[1].score }}</span></td>
                                <td   *ngIf="match?.length != 0"><a href="#" class="detailslink"><span class="glyphicon glyphicon-info-sign info-icon-details" aria-hidden="true"></span>Details</a></td>
                    
                               
                            </tr>
                </tbody>
            </table>
            </div>
     `,
    providers: [CompetitionService,MatchService]
})

export class MatchesComponent implements OnInit{

    //Competities ophalen
    competitions: Competition[];
    matches: Match[];

    constructor (private competitionService: CompetitionService, private matchService: MatchService) {}

   
    ngOnInit(){
    //Competities ophalen en variabele vullen
    this.getCompetitions();

    }

    getCompetitions(){
        this.competitionService.getCompetitions()
                    .subscribe(
                        res => this.getMatches(res) //this.competitions = res
                    );
    }

    getMatches(competitionResult){
        console.log(competitionResult);
        for(var i = 0; i <= competitionResult.length; i++){
            this.getMatchesOfCompetition(competitionResult[i]["id"]);
        }
    }

    getMatchesOfCompetition(competitionId){
         this.matchService.getMatchesOfCompetition(competitionId)
                    .subscribe(
                        res => this.fillMatchesArray(res) //this.matches.push(res) //this.competitions = res
                    );
    }

    fillMatchesArray(matchesResult){
        var arrMatches: Match[];
        arrMatches.push(matchesResult);
        console.log(arrMatches);
        this.matches.push(arrMatches[0]);
    }


  

    
}