import { Component } from '@angular/core';

@Component({
    selector: 'calendar',
    template: `
    
    <section class="sidebar">
        <header>
            <div class="pull-left">
                    <p>Calendar</p>
            </div>
            <div class="pull-right">
                <a class="active" href="#">My Calendar</a>
                <a href="#">All matches</a>
            </div>
        </header>
        <calendar-item></calendar-item>
    </section>
    `
})

export class CalendarComponent{

}