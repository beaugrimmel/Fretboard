import Game from "./Game.js";

var game = new Game();
game.generateFretToGuess();
game.hideSecondGame();
console.log("Hey cheater... the correct answer is " + game.correctAns);
