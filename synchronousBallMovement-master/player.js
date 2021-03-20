class player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.clicks = null;
    }
    getCount(){
        var playerCountref = dataBase.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        dataBase.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerPosition = "players/player"+this.clicks;
        dataBase.ref(playerPosition).set({
            distance:this.distance,
            name:this.name
        })
    }
    getDistance(){
        var playerInfo = dataBase.ref('players');
        playerInfo.on("value",function(data){
            allPlayers = data.val();
        })
    }
}