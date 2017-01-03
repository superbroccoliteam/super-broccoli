import {Component} from '@angular/core';

@Component({
    selector: 'news-item',
    template: ` 
    
    <div class="row">
         <div class="col-sm-4"><a href="#" class=""><img src="http://placehold.it/1280X720" class="img-responsive"></a>
            </div>
            <div class="col-sm-8">
                <h3 class="title">How to Fight Fraud with Artificial Intelligence and Intelligent Analytics</h3>
                <p class="text-muted">3 december 2016</p>
                <p>Could artificial intelligence have been used to prevent the high-profile Target breach? The concept is not so far-fetched. Organizations such as Mastercard and RBS WorldPay have long relied on artificial intelligence to detect fraudulent transaction patterns and prevent card.</p>

                <p class="text-muted">Presented by <a href="#">Ellen Richey</a></p>

            </div>
    </div>
    
    `
})

export class NewsItemComponent{

}