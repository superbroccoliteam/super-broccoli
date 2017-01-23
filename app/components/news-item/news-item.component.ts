import {Component, Input} from '@angular/core';
import { NewsItem } from '../news/NewsItem';

@Component({
    selector: 'news-item',
    template: ` 
    
   
   <div class="news col-lg-4 col-sm-6">
         <div class="col-lg-12"><a href="{{ newsItem.url }}" class=""><img src="{{ newsItem.urlToImage || 'app/assets/img/IGN-Logo.jpg' }}" class="img-responsive"></a>
            </div>
            <div class="col-lg-12">
                <h3 class="title"><a href="{{ newsItem.url }}">{{ newsItem.title }}</a></h3>
                <p class="text-muted">3 december 2016</p>
                <p>{{ newsItem.description }}</p>

                <p class="text-muted">Presented by {{ newsItem.author }}</p>

            </div>
   </div>
    
    `
})

export class NewsItemComponent{
    @Input() newsItem: NewsItem;
}