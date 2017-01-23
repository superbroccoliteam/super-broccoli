import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {NewsItem} from './NewsItem';

@Component({
    selector: 'news',
    template: ` 
    
    <div class="row">
        <news-item *ngFor="let item of news" 
        [newsItem]="item">
        </news-item>
    </div>

    `,
    providers: [NewsService]
})

export class NewsComponent implements OnInit{
    //Nieuws ophalen 
    news: NewsItem[];

    constructor (private newsService: NewsService) {}

    ngOnInit() { 
        this.getNews(); 
    }

    getNews(){
        this.newsService.getLatestNews()
                    .subscribe(
                        res => this.news = res
                    );
    }


   

}