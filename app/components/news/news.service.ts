import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewsItem } from './NewsItem';
import 'rxjs/add/operator/map'

@Injectable()
export class NewsService{
    private newsUrl = "https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=c3215201720b4f2da10ba8eba8efde4e";

    constructor (private http: Http){ }

    getLatestNews(){
        return this.http.get(this.newsUrl)
            .map(res => res.json()["articles"]);
    }

}

//Key: c3215201720b4f2da10ba8eba8efde4e