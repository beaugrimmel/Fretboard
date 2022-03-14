export default class Game {
  constructor() {
    this.correctAns = null;
    this.numCorrect = 0;
    this.numGuesses = 0;
    document.addEventListener("click", this.handleMouseClick);
  }

  handleMouseClick = (event) => {
    if (event.target.matches("[data-note]")) {
      this.pressNote(event);
      return;
    }

    // TODO - handle other possible mouse clicks
  };

  pressNote(event) {
    // TODO
    var note = event.target.dataset.note;
    if (note == this.correctAns) {
      this.numCorrect += 1;
      this.resetNoteSelector();
      this.resetFretboard();
      this.generateFretToGuess();
      console.log("Hey cheater... the correct answer is " + this.correctAns);
    } else {
      console.log("Wrong, thats a " + note);
      event.target.classList.add("wrong");
    }
    this.numGuesses += 1;
    return;
  }

  generateFretToGuess() {
    const fretboardGrid = document.querySelector("[data-fretboard-grid]");
    const frets = fretboardGrid.querySelectorAll("[data-note]");

    var select = Math.floor(Math.random() * frets.length);
    for (var i = 0; i < frets.length; ++i) {
      if (i == select) {
        frets[i].classList.add("selected");
        this.correctAns = frets[i].dataset.note;
      }
    }
  }

  resetFretboard() {
    const fretboardGrid = document.querySelector("[data-fretboard-grid]");
    const frets = fretboardGrid.querySelectorAll("[data-note]");

    for (var i = 0; i < frets.length; ++i) {
      frets[i].classList.remove("selected");
    }
    return;
  }

  resetNoteSelector() {
    const noteSelector = document.querySelector("[data-note-selector]");
    const notes = noteSelector.querySelectorAll("[data-note]");

    for (var i = 0; i < notes.length; ++i) {
      notes[i].classList.remove("wrong");
    }
    return;
  }
}

var game = new Game();
game.generateFretToGuess();
console.log("Hey cheater... the correct answer is " + game.correctAns);
