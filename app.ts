//TypeScript code goes here!
import * as readline from "readline";
import * as variable from 'module'

//initialize a player X or O
var player:string;

//number of turns in tic-tac-toe default value is 0
var numsgame:number = 0;

//game score
var scoreX:number = 0;
var scoreO:number = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function pickPlayer() {
//choose a player X or O
    rl.question('Choose a Player X or O ?', (answer) => {
        if(answer == 'X' || answer == 'x') {
            player = 'X';
            gameBaord();
            playGame();
        } else if(answer == 'O' || answer == 'o') {
            player = 'O';
            gameBaord();
            playGame();
        }
    });
}

//empty game board 3 x 3
let board:Array<Array<string>> = [['', '', ''], ['', '', ''], ['', '', '']];
// format tic tac toe game board with row nums and col nums
const gameBaord = () => {
    let line = "";
    console.log("    0   1   2");
    for(let i = 0; i < 3; i++) {
        line += i + '   ';
        for(let j = 0; j < 3; j++) {
        line += board[i][j] + ' | ';
        }
        console.log(line);
        console.log("  -----------")
        line = ""
    }
};

//play game to choose a square 
const playGame = () => {
    let contine = false;

    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if (board[i][j] === '') {
                contine = true;
            }
        }
    }

    if (contine === true) {
        rl.question("Player " + player + "'s turn. Pick a square. eg. 0,1\n(row,col):", function(movement) {
            playerMove(movement);
        });
    }
};

//reset game board
const gameReset = () => {
    board.splice(0, board.length);
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    numsgame = 0;
    gameBaord();
    playGame();
};

//after receving input data, the data recognizes as player's movement and mark on the board
const playerMove = (move:string) => {
    var row = parseInt(move.substr(0,1));
    var col = parseInt(move.substr(2,1));

    if((row)>=0 && (row) < 3) {
        if((col)>=0 && (col) < 3) {
            if (board[row][col] === '') {
                board[row][col] = player;
                gameBaord();
                numsgame++;

                if(numsgame >= 5) {
                    checkWins();
                } else if (numsgame == 9) {
                    checkTies();
                } else {
                    if(player == 'X') {
                        player = 'O';
                    } else if (player == 'O') {
                        player = 'X';
                    }
                    playGame();
                }
            } else {
                console.log("Invalid move: " + move + ". Pick a square.")
                playGame();
            }
        }
    }
};

//checking a winner after 5 turns or more
const checkWins = () => {    
    if(board[0][0] == board[0][1] && board[0][0] == board[0][2]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2]) {
        console.log(player + " wins!");
        if(player  == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        console.log('Player X won: ' + scoreX + ', Player O won: ' + scoreO);
        rl.question('Do you want to play again, y or n? ', (answer) => {
            if(answer == 'y' || answer == 'Y') {
                gameReset();
            } else if (answer == 'n' || answer == 'N') {
                rl.close();
            }
        });
    } else {
        // if there is no winner going back to the game until final turns 
        if(player == 'X') {
            player = 'O';
        } else if (player == 'O') {
            player = 'X';
        }
        playGame();
    }
};

// checking ties 
const checkTies = () => {
    console.log("It's a tie!")
    rl.question('Do you want to play again, y or n? ', (answer) => {
        if(answer == 'y' || answer == 'Y') {
            gameReset();
        } else if (answer == 'n' || answer == 'N') {
            rl.close();
        }
    });
};


pickPlayer();