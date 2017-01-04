import {Component, OnInit} from '@angular/core';
import {CompetitionService} from '../competitions/competition.service';
import {Competition} from '../competitions/Competition';
import {Match} from './Match';
import {MatchService} from './matches.service';


@Component({
    selector: 'matches',
    template: '<h1>Matches</h1>',
    providers: [CompetitionService,MatchService]
})

export class MatchesComponent{

    //Competities ophalen
    competitions: Competition[];
    matches: Match[];

    constructor (private competitionService: CompetitionService, private matchService: MatchService) {}

    ngOnInit(){
        this.getCompetitions();
    }

    getCompetitions(){

         this.competitionService.getCompetitions()
                .subscribe(response => this.getMatches(response))
      
    }

    getMatches(compRes: any){
        this.matchService.getMatches(compRes)
            .subscribe(response => console.log(response))
    }

    

  

    
}