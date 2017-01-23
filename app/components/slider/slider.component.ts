import {Component} from '@angular/core'

@Component({
    selector: 'slider',
    template: ` 
    
    <div class="slideshow-container">

            <div class="mySlides fading">
             
                <img src="app/assets/img/ESL.jpg" style="width:100%">
              
            </div>

            <div class="mySlides fading">
         
                <img src="app/assets/img/LCS.jpg" style="width:100%">
            
            </div>

            <div class="mySlides fading">
    
                <img src="app/assets/img/MLG.jpg" style="width:100%">
               
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