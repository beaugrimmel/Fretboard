export default class Guess {
  constructor() {
    this.currGuess = null;
    this.btns = document.querySelectorAll("button");
  }

  isCorrectGuess(board) {
    if (board.selectedNote == this.currGuess) {
      return true;
    }
    return false;
  }
}
