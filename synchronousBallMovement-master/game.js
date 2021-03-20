class game{
    constructor(){}
getState(){
    var gameStateref = dataBase.ref('gameState');
    gameStateref.on("value",function(data){
        gameState = data.val();
        })
}
update(state){
dataBase.ref('/').update({
    gameState:state
})
}
async start(){
    if(gameState==0){
        p = new player();
        var playerCountRef = await dataBase.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            p.getCount();
        }      
        f = new form();
        f.display();
    }
car1 = createSprite(100,200,15,15);
car2 = createSprite(300,200,15,15);
car3 = createSprite(500,200,15,15);
car4 = createSprite(700,200,15,15);
cars = [car1,car2,car3,car4];
}
play(){
    f.hide();
    text("You have joined the game",120,100); 
    p.getDistance();  
    if(allPlayers!==undefined){
        var index = 0;
        var x = 0;
        var y ;
    for(var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index==p.index){cars[index-1].shapeColor = "red"}
    }  
    }
    if(keyIsDown(UP_ARROW)&& p.clicks!==null){
        p.distance = p.distance+1;
        p.update();
    }
    drawSprites();
}
}