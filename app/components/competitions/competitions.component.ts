import {Component, OnInit} from '@angular/core';;
import {CompetitionService} from './competition.service';
import {Competition} from './Competition'

@Component({
    selector: 'competitions',
    template: ` 
        <h1>Competitions</h1>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Competition</th>
                        <th>Size</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let competition of competitions" >
                        <td>{{ competition.name }}</td>
                        <td>{{ competition.size }}</td>
                        <td>{{ competition.date_start }}</td>
                        <td>{{ competition.date_end }}</td>
                        <td>{{ competition.status }}</td>
                        <td><a href="#" class="detailslink"><span class="glyphicon glyphicon-info-sign info-icon-details" aria-hidden="true"></span>Details</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
    `,
    providers: [CompetitionService]
})

export class CompetitionsComponent{
    
    //Competities ophalen 
    competitions: Competition[];

    constructor (private competitionService: CompetitionService) {}

    ngOnInit() { 
        this.getCompetitions(); 
    }

    getCompetitions(){
        this.competitionService.getCompetitions()
                    .subscribe(
                        res => this.competitions = res
                    );
    }


}