
var images = ["images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",]

var player1Img = document.querySelector(".img1");
var player2Img = document.querySelector(".img2");

player1Img.setAttribute("src", images[2]);
player2Img.setAttribute("src", images[0]);

var player1 = 0;
var player2 = 0;

function getRandomImageForPlayer1() {
    player1 = Math.floor(Math.random() * images.length);
    player1Img.setAttribute("src", images[player1]);
}

function getRandomImageForPlayer2() {
    player2 = Math.floor(Math.random() * images.length);
    player2Img.setAttribute("src", images[player2]);
    playerWon();
}

function playerWon() {
    var playerToBeWon = document.querySelector("h1");

    if (player1 > player2) {
        playerToBeWon.textContent = "Player 1 won !!";
    }
    else if (player1 < player2) {
        playerToBeWon.textContent = "Player 2 won !!";
    }
    else {
        playerToBeWon.textContent = "Match Tied";
    }
}

