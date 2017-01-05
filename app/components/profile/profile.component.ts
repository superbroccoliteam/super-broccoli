import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../login/authorization.service';
import {CompetitionService} from '../competitions/competition.service';
import {Router} from '@angular/router';
import {Competition} from '../competitions/Competition';

@Component({
    selector: 'competitions',
    template: ` 
        <div class="container-fluid">
    <div class="col-lg-12">

        <div class="col-lg-12 panel panel-default paddingpanel">
            <div class="panel-heading">Nickname</div>
            <div class="col-lg-4">
                <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" class="img-thumbnail">

            </div>
            <div class="col-lg-8">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Naam</label>
                        <div class="col-sm-10">
                            <p class="form-control-static">Joske Vermeulen</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Leeftijd</label>
                        <div class="col-sm-10">
                            <p class="form-control-static">16 jaar</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Locatie</label>
                        <div class="col-sm-10">
                            <p class="form-control-static">Belgie</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Social Media</label>
                        <div class="col-sm-10">

                            <a class="col-lg-2 col-sm-4 col-xs-4" href="#"><img src="http://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700" class="img-thumbnail"></a>

                            <a class="col-lg-2 col-sm-4 col-xs-4" href="#"><img src="http://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700" class="img-thumbnail"></a>


                        </div>
                    </div>
                </form>
            </div>




        </div>


       <div class="row col-lg-12 panel panel-default paddingpanel">
<div class="panel-heading">Gamelist</div>
            <div class="col-lg-12">

                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>
                <a class="col-lg-2 col-sm-6 col-xs-6 gamelist" href="#"><img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_(promo_image).jpg" class="img-thumbnail game"></a>



            </div>
        </div>

         <div class="row col-lg-12 panel panel-default paddingpanel">
<div class="panel-heading">Followed Competitions</div>

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
                    <tr *ngFor="let competition of competitions" >
                        <td>{{ competition?.name }}</td>
                        <td>{{ competition?.discipline }}</td>
                        <td>{{ competition?.size }}</td>
                        <td>{{ competition?.date_start }}</td>
                        <td>{{ competition?.date_end }}</td>
                        <td>{{ competition?.status }}</td>
                        <td><a [routerLink]="['/competition', competition?.id]" class="detailslink"><span class="glyphicon glyphicon-info-sign info-icon-details" aria-hidden="true"></span>Details</a></td>
                    </tr>
                </tbody>
            </table>
            </div>

            </div>

            </div>
       
    `,
    providers: [CompetitionService]
})

export class ProfileComponent{
    competitions: Competition[] = [];
    
    constructor(private authorizationService: AuthorizationService, private router: Router, private competitionService: CompetitionService){}

    ngOnInit(){
        //Is er een gebruiker ingelogd?
        if(this.authorizationService.isLoggedIn()){
            //OK, toon gevolgde competities
            this.getFollowedCompetitions()
        } else {
            //Gebruiker is niet ingelogd, naar login pagina sturen
            this.router.navigate(['login'])
        }
    }

    getFollowedCompetitions(){
        var userId = localStorage.getItem('user_id');
        var token = localStorage.getItem('auth_token');

        this.authorizationService.getUserById(userId, token)
                .subscribe(res => this.handleFollowedCompetitions(res["competitions"]))
    
    }

    handleFollowedCompetitions(res){
        //Elke competitie in res overlopen en naam ophalen
        console.log(res);
        for (var _i = 0; _i < res.length; _i++){
            var competitionId = res[_i];

            this.competitionService.getCompetition(competitionId)
                .subscribe(
                    data => this.done(data)
                    
                )
        }
    }

    done(data){
        this.competitions.push(data);
        console.log(this.competitions);
    }

}