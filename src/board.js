import Space from "./space.js"

class Board{
    constructor(){
        this.board = []
    }

    generateBoard(){
        let tempArr = []
        for(let i = 0; i <3; i++){
            for(let i = 0; i < 3; i++){
                let space = new Space()
                tempArr.push(space)
            }
            this.board.push(tempArr)
            tempArr = []
        }
    }

    printBoard(){
        for(let i = 0; i < 3; i++){
            console.log(`${this.board[i][0].symbol} | ${this.board[i][1].symbol} | ${this.board[i][2].symbol}`)
            if(i < 2){
                console.log('-----------')
            }
        }
    }

    modifySpace(player, row, col){
        this.board[row-1][col-1] = new Space(player)
        console.clear()
        this.printBoard()
    }

    testBoard(){
        for(let i = 0; i < 3; i++){
            if (this.board[i][0].symbol === this.board[i][1].symbol && this.board[i][0].symbol === this.board[i][2].symbol && this.board[i][0].symbol!== '-'){
                return true
            }else if (this.board[0][i].symbol === this.board[1][i].symbol && this.board[0][i].symbol === this.board[2][i].symbol && this.board[0][i].symbol !== '-'){
                return true
            }
        }
        if (this.board[0][0].symbol === this.board[1][1].symbol && this.board[0][0].symbol === this.board[2][2].symbol && this.board[0][0].symbol !== '-'){
            return true
        }
        if (this.board[0][2].symbol === this.board[1][1].symbol && this.board[0][2].symbol === this.board[2][0].symbol && this.board[0][2].symbol !== '-'){
            return true
        }
        return false
}
}

export default Board