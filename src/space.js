class Space{
    constructor(player){
        this.player = player
        this.symbol = '-'
        if(this.player){
            this.symbol = player.symbol
        }
    }
    
}

export default Space