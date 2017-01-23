import {Component, ElementRef} from '@angular/core';;

@Component({
    selector: 'chat',
    template: ` 
       
       <section id="chat">
                <div class="rooms">
                <div class="panel-heading paddingpanel">ROOMS</div>
                <div id="rooms"></div>
            </div>

            <div class="chatbox">
                <div class="conversation" id="conversation"></div>
                <input id="data" class="chattext" />
                <button id="datasend" value="send"><span class=" glyphicon glyphicon-send"></span> </button>
                <!--<input type="button" id="datasend" value="send" />-->
            </div>
       </section>


       <script>
   

</script>

       
    `
})

export class ChatComponent{

    constructor(private elementRef: ElementRef) {}
    
    ngAfterViewInit(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../app/assets/js/chat.js";
        this.elementRef.nativeElement.appendChild(s);
    }

}