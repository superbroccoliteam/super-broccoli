import {Component} from '@angular/core'

@Component({
    selector: 'slider',
    template: ` 
    
    <div class="slideshow-container">

            <div class="mySlides fading">
                <div class="numbertext">1 / 3</div>
                <img src="http://gamewires.com/Images/Posts/48007_banner.jpg" style="width:100%">
                <div class="text">Fifa 17</div>
            </div>

            <div class="mySlides fading">
                <div class="numbertext">2 / 3</div>
                <img src="http://www.psnation.com/wp-content/uploads/2016/05/call-of-duty-infinite-warfare-banner.png" style="width:100%">
                <div class="text">Infinite Warfare</div>
            </div>

            <div class="mySlides fading">
                <div class="numbertext">3 / 3</div>
                <img src="http://telkomgaming.co.za/wp-content/uploads/2016/05/Overwatch-Banner-1-800x277.png" style="width:100%">
                <div class="text">Overwatch</div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">❮</a>
            <a class="next" onclick="plusSlides(1)">❯</a>

    </div>

    <br />

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>

    `
})

export class SliderComponent{

}