var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimg = "dice" + randomNumber1 + ".png";

var randomimgsource = "images/" + randomDiceimg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomimgsource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimgsource2); 


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "😍 Player 1 Winner"
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "😎 Player 2 Winner"
}

else {
    document.querySelector("h1").innerHTML = "🤷‍♀️ Draw.!"
}