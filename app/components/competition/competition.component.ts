import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../competitions/Competition';
import { CompetitionService } from '../competitions/competition.service';
import { Match } from '../matches/Match';
import { MatchService } from '../matches/matches.service';

@Component({
    selector: 'competition',
    template: `

        <div class="col-lg-12">

            <div class="col-lg-12 panel panel-default paddingpanel">
            <h1>{{ competition?.name }}</h1>
            <p><button (click)="followCompetition()">Follow competition</button></p>
                <div class="col-lg-12 panel-heading">
                    Competition details
                </div>
                <div class="col-lg-12">


<div class="col-lg-6">

    <form class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-4 control-label">Game</label>
            <div class="col-sm-8">
                <p class="form-control-static">{{ competition?.discipline }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label">Start Date</label>
            <div class="col-sm-8">
                <p class="form-control-static">{{ competition?.date_start }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label">End Date</label>
            <div class="col-sm-8">
                <p class="form-control-static">{{ competition?.date_end }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label">Satus</label>
            <div class="col-sm-8">
                <p class="form-control-static">{{ competition?.status }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label">Rules</label>
            <div class="col-sm-8">
                <p class="form-control-static">{{ competition?.rules }}</p>
            </div>
        </div>
    </form>

</div>

                    <div class="col-lg-6">

                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Match Type</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ competition?.match_type }}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Organization</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ competition?.organization }}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Prize</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ competition?.prize }}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Size</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ competition?.size }}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Description</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ competition?.description }}</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Website</label>
                                <div class="col-sm-8">
                                   <a href="#"> <p class="form-control-static">{{ competition?.website }}</p> </a>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>




        </div>
        <div class="col-lg-12 panel panel-default paddingpanel">
<div class="panel-heading ">Matches</div>

             <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr class="tabelheader">
        
                                <th>Date</th>
                                <th>Team A </th>
                                <th>Team B</th>
                                <th>Status</th>
                                <th>Score</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr *ngFor="let match of matches">

                      
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



        </div>







    `,
    providers: [CompetitionService,MatchService]
})

export class CompetitionComponent implements OnInit{
    competition: Competition;
    matches: Match;
    



    constructor(
        private competitionService: CompetitionService,
        private route: ActivatedRoute,
        private matchService: MatchService
    ) {}

    ngOnInit(){
        let competitionId = this.route.snapshot.params['id'];
        
        //Details van competitie ophalen
        this.competitionService.getCompetition(competitionId)
                        .subscribe(
                            res => this.getMatches(res)
                        );        
    }

    getMatches(response){
        this.competition = response;

        //Alle matches ophalen
        this.matchService.getMatchesOfCompetition(response["id"])
                .subscribe(
                    res => this.done(res)
                )
    }

    done(responseMatches){
        this.matches = responseMatches;
        console.log(this.matches);
    }

    followCompetition(){
        //Controle als de gebruiker is ingelogd, anders doorsturen naar login pagina
        var userId = localStorage.getItem('user_id');
        var competitionId = this.competition.id.toString();
        var token = localStorage.getItem('auth_token');

        this.competitionService.followCompetition(userId,competitionId,token)
    }

}

//Demo competition: 581a8506150ba0bd628b4579