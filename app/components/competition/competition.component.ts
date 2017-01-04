import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../competitions/Competition';
import { CompetitionService } from '../competitions/competition.service';

@Component({
    selector: 'competition',
    template: '<h1>Competition</h1>',
    providers: [CompetitionService]
})

export class CompetitionComponent implements OnInit{
    competition: Competition;


    constructor(
        private competitionService: CompetitionService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        let competitionId = this.route.snapshot.params['id'];
        
        //Details van competitie ophalen
        this.competitionService.getCompetition(competitionId)
                        .subscribe(
                            res => console.log(res)
                        );

    }

}

//Demo competition: 581a8506150ba0bd628b4579