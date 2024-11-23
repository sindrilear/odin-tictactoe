const player1 = {
    playerSymbol: "x",
    playerName: "x",
    playerStatus: [0, 0, 0, 0, 0, 0, 0 ,0],
    playerScore: 0,
    resetStatus() { 
        this.playerStatus = [0, 0, 0, 0, 0, 0, 0 ,0];
    },
    changeName(name) {
        this.playerName = name;
    }
};

const player2 = {
    playerSymbol: "o",
    playerName: "o",
    playerStatus: [0, 0, 0, 0, 0, 0, 0 ,0],
    playerScore: 0,
    resetStatus() { 
        this.playerStatus = [0, 0, 0, 0, 0, 0, 0 ,0];
    },
    changeName(name) {
        this.playerName = name;
    }
}

let player1turn = true;
let choices = [];
let turns = 0;
let tie = 0;

function addScore (playerScore, playerSymbol) {
const scoreX = document.getElementById("scoreX")
const scoreY = document.getElementById("scoreY")
if  (playerSymbol === "x") {
    scoreX.innerHTML = playerScore
} else {
    scoreY.innerHTML = playerScore
}};

function resetGame() {
    choices = [];
    turns = 0;
    player1turn = true;
    player1.resetStatus();
    player2.resetStatus();
    for (i = 1; i < 10; i++) {
        grid = document.getElementById(i)
        grid.innerHTML = "";
    }
}

function announcePlayer(playertoannounce) {
    const player = document.getElementById("announce")
    if (playertoannounce === "x") {
        player.innerHTML = `It's player ${player1.playerName} turn!`;
    } else {
        player.innerHTML = `It's player ${player2.playerName} turn!`;
    }
}

announcePlayer("x");

const gamegrid = document.querySelector(".gamegrid")

gamegrid.addEventListener('click', (ev) => {
    if (player1turn === true) {
        player = player1.playerSymbol;
        playerStatus = player1.playerStatus;
        playerScore = player1.playerScore;
        player1turn = false;
    } else {
        player = player2.playerSymbol;
        playerStatus = player2.playerStatus;
        playerScore = player2.playerScore;
        player1turn = true;
    }
    playerChoice = parseInt(ev.target.id);
    const grid = document.getElementById(`${playerChoice}`)
    const announce = document.getElementById("announce")
    const scoreTie = document.getElementById("scoreTie")

    if (choices.includes(playerChoice)) {
       announce.innerHTML = "This move has already been made"
    } else {
        choices.push(playerChoice)
        grid.innerHTML = player;
        player1turn ? announcePlayer(player1.playerSymbol) :  announcePlayer(player2.playerSymbol);
        console.log(playerStatus);
        switch (playerChoice) {
            case 1:
                playerStatus[0]++;
                playerStatus[3]++;
                playerStatus[6]++;
                break;
            case 2:
                playerStatus[0]++;
                playerStatus[4]++;
                break;
            case 3:
                playerStatus[0]++;
                playerStatus[5]++;
                playerStatus[7]++;
                break;
            case 4:
                playerStatus[1]++;
                playerStatus[3]++;
                break;
            case 5:
                playerStatus[1]++;
                playerStatus[4]++;
                playerStatus[6]++;
                playerStatus[7]++;
                break;
            case 6:
                playerStatus[1]++;
                playerStatus[5]++;
                break;
            case 7:
                playerStatus[2]++;
                playerStatus[3]++;
                playerStatus[7]++;
                break;
            case 8:
                playerStatus[2]++;
                playerStatus[4]++;
                break;
            case 9:
                playerStatus[2]++;
                playerStatus[5]++;
                playerStatus[6]++;
                break;
        }
        turns++;
        if (turns === 9) {
            announce.innerHTML = "It's a tie!"
            tie++;
            scoreTie.innerHTML = tie;
            resetGame();
        } else if (playerStatus.includes(3)) {
            announce.innerHTML = `Player ${player} wins!`
            playerScore++;
            if (player ===  "x") {
                player1.playerScore++;
                addScore(playerScore, player);
            } else {
                player2.playerScore++;
                addScore(playerScore, player);
            }
            resetGame();
        }
    }
});