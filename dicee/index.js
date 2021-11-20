

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var rollDice1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src",rollDice1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var rollDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",rollDice2);



if(rollDice1 > rollDice2){
    document.querySelector("h1").innerHTML = "👍 Player 1 Wins!";
}else if(rollDice1 < rollDice2){
    document.querySelector("h1").innerHTML = "🤘 player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = " ⚖️ Draw!" ;   
}

