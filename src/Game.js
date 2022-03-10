import Board from "./Board.js";

const tileSize = 32;

const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

const board = new Board(tileSize);

board.selectRandomFret();

function game() {
  board.draw(ctx);
}

board.setCanvasSize(canvas);
setInterval(game, 1000 / 100);
