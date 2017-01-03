import {Component} from '@angular/core';

@Component({
    selector: 'calendar-item',
    template: ` 
        <section class="sidebarMatch">
            <div class="sidebarMatchBoxart pull-left">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8f/Overwatch_cover_art_(PC).jpg" />
            </div>
            <div class="sidebarMatchInfo">
                <p>Team 1 vs Team 2</p>
                <p>19:00 - 23:00</p>
                <p>Competition</p>
            </div>
            <div class="sidebarMatchScore">
                <p>FINISHED</p>
                <p class="sidebarMatchScoreItem">5 - 3</p>
            </div>
        </section>
    `
})

export class CalendarItemComponent{

}