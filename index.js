function randomGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

function imgSrcGenerator(n) {
  var ext = ".png";
  var constant = "images/dice";
  return constant + n + ext;
}

document.querySelector("button").onclick = function () {
  var p1 = randomGenerator();
  var p2 = randomGenerator();

  var dice1 = imgSrcGenerator(p1);
  var dice2 = imgSrcGenerator(p2);

  document.querySelectorAll("img")[0].setAttribute("src", dice1);
  document.querySelectorAll("img")[1].setAttribute("src", dice2);

  if (p1 > p2) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
  } else if (p2 > p1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h2").innerHTML = "🚩 Draw! 🚩";
  }

  document.querySelector("button").textContent = "Play Again";
};
