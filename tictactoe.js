const gameboard = {
    gameboardArray:
[
    ["''", "''", "''"],
    ["''", "''", "''"],
    ["''", "''", "''"]
]
}

const player1 = {
    playerSymbol: "x",
    playerStatus: [0, 0, 0, 0, 0, 0, 0 ,0]
}

const player2 = {
    playerSymbol: "o",
    playerStatus: [0, 0, 0, 0, 0, 0, 0 ,0]
}

function logMoves() {
console.log(
"Press 1 for top-left \n\
Press 2 for top-center\nPress 3 for top-right\n\
Press 4 for center-left\nPress 5 for center\n\
Press 6 for center-right\nPress 7 for bottom-left\n\
Press 8 for bottom-center\nPress 9 for bottom-right");
}

function  playGame () {
let i = 0;
let player1turn = true;
let choices = [];

while (i < 9){
logMoves();
if (player1turn === true) {
    player = player1.playerSymbol;
    playerStatus = player1.playerStatus;
    player1turn = false;
} else {
    player = player2.playerSymbol;
    playerStatus = player2.playerStatus;
    player1turn = true;
}
isTrue = true;
playerChoice = "";
    while(isTrue) {
        let playerChoice = parseInt(prompt(`Make your move....${player}`))
        if (choices.includes(playerChoice)) {
            console.log("This move has already been made")
        } else if (playerChoice > 9 || playerChoice <= 0) {
            console.log("Input is incorrect")
        } else {
        choices.push(playerChoice)
        switch (playerChoice) {
            case 1:
                gameboard.gameboardArray[0][0] = player;
                playerStatus[0]++;
                playerStatus[3]++;
                playerStatus[6]++;
                break;
            case 2:
                gameboard.gameboardArray[0][1] = player;
                playerStatus[0]++;
                playerStatus[4]++;
                break;
            case 3:
                gameboard.gameboardArray[0][2] = player;
                playerStatus[0]++;
                playerStatus[5]++;
                playerStatus[7]++;
                break;
            case 4:
                gameboard.gameboardArray[1][0] = player;
                playerStatus[1]++;
                playerStatus[3]++;
                break;
            case 5:
                gameboard.gameboardArray[1][1] = player;
                playerStatus[1]++;
                playerStatus[4]++;
                playerStatus[6]++;
                playerStatus[7]++;
                break;
            case 6:
                gameboard.gameboardArray[1][2] = player;
                playerStatus[1]++;
                playerStatus[5]++;
                break;
            case 7:
                gameboard.gameboardArray[2][0] = player;
                playerStatus[2]++;
                playerStatus[3]++;
                playerStatus[7]++;
                break;
            case 8:
                gameboard.gameboardArray[2][1] = player;
                playerStatus[2]++;
                playerStatus[4]++;
                break;
            case 9:
                gameboard.gameboardArray[2][2] = player;
                playerStatus[2]++;
                playerStatus[5]++;
                playerStatus[6]++;
                break;
        }
        isTrue = false;
    }}

if (playerStatus.includes(3)) {
    console.log(`Player ${player} wins!`);
    console.table(gameboard.gameboardArray);
    break;
}
console.table(gameboard.gameboardArray);
i++;
}}