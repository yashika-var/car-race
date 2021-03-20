class form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('join');
        this.greeting = createElement('h1');
        this.title = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.html("Hi,Welcome to the car racing game");   
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();      
            p.name = this.input.value();
            playerCount = playerCount+1
            p.clicks = playerCount;
            p.update();
            p.updateCount(playerCount);
            this.greeting.html("Waiting For Other Player's");
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        }

        )
    }
}