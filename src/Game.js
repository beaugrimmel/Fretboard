import Board from "./Board.js";
import Guess from "./Guess.js";

const tileSize = 40;

const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

const board = new Board(tileSize);
board.setCanvasSize(canvas);

board.selectRandomFret();

const guess = new Guess();
guess.btns.forEach(function (i) {
  i.addEventListener("click", function () {
    guess.currGuess = i.id;
  });
});

function game() {
  // generate question
  board.draw(ctx);
  if (guess.isCorrectGuess(board)) {
    console.log("Yes");
    board.selectRandomFret();
  } else {
    console.log("No");
  }
  // update score
  // next question if ready
}

setInterval(game);
