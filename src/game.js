import Board from "./board.js"
import Player from "./player.js";
import readline from 'readline-sync'

class Game{
    constructor(){

    }
    play(){
        const p1Name = readline.question('Enter player 1 name(X)')
        const p2Name = readline.question('Enter player 2 name(O)')
        let player1 = new Player(p1Name, 'X')
        let player2 = new Player(p2Name, 'O')
        console.log('Let\'s play!')
        let board = new Board()
        board.generateBoard()
        board.printBoard()
        
        let i = 0
        let activePlayer = player1
        while(i < 9 && board.testBoard() === false){
            console.log(`${activePlayer.name}'s turn'`)
            let row = readline.question('Which row do you want to play in?')
            let col = readline.question('Which column do you want to play in?')
            board.modifySpace(activePlayer, row, col)

            if(board.testBoard() === true){
                console.log(`${activePlayer.name} wins the game!!!!!`)
                break
            }else{
                i += 1
                if(i === 9){
                    console.log('Tie!!!!')
                }
                if(activePlayer == player1){
                    activePlayer = player2
                }else{
                    activePlayer = player1
                }
            }

        }
    }
}
export default Game