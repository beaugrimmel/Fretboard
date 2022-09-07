export default class Game {
  constructor() {
    this.gameType = 1;
    this.correctAns = null;
    this.numCorrect = 0;
    this.numGuesses = 0;
    this.stringsFound = 0;
    document.addEventListener("click", this.handleMouseClick);
  }

  handleMouseClick = (event) => {
    if (event.target.matches("[data-noteKey]")) {
      this.pressNote(event);
      return;
    }

    if (event.target.matches("[data-note]")) {
      this.pressFret(event);
      return;
    }

    if (event.target.id == "hideAbout") {
      this.hideAbout(event);
      return;
    }

    if (event.target.id == "showAbout") {
      this.showAbout(event);
      return;
    }

    if (event.target.id == "changeGame") {
      this.changeGame(event);
      return;
    }
  };

  hideAbout(event) {
    const about = document.getElementById("aboutSection");
    about.style.display = "none";
  }

  showAbout(event) {
    const about = document.getElementById("aboutSection");
    about.style.display = "";
  }

  hideSecondGame() {
    const titleTwo = document.getElementById("titleTwo");
    titleTwo.classList.toggle("hide");
  }

  changeGame(event) {
    if (this.gameType == 1) {
      this.gameType = 2;
      this.resetFretboard();
      this.resetNoteSelector();
      this.generateNoteToGuess();
    } else {
      this.gameType = 1;
      this.resetFretboard();
      this.resetNoteSelector();
      this.generateFretToGuess();
    }

    const titleOne = document.getElementById("titleOne");
    titleOne.classList.toggle("hide");
    const titleTwo = document.getElementById("titleTwo");
    titleTwo.classList.toggle("hide");
  }

  pressNote(event) {
    var note = event.target.dataset.notekey;
    if (this.gameType == 2) {
      alert("Find the highlighted note on each string!");
      return;
    }
    if (note == this.correctAns) {
      this.increaseNumCorrect();
      this.resetNoteSelector();
      this.resetFretboard();
      this.generateFretToGuess();
      console.log("Hey cheater... the correct answer is " + this.correctAns);
    } else {
      event.target.classList.add("wrong");
    }
    this.increaseNumGuesses();
    return;
  }

  pressFret(event) {
    var note = event.target.dataset.note;
    if (this.gameType == 1) {
      alert("Identify the highlighted fret's note using the selector!");
      return;
    }
    if (
      event.target.classList.contains("correct") ||
      event.target.classList.contains("wrong")
    ) {
      console.log("already guessed");
      return;
    }
    if (note == this.correctAns) {
      event.target.classList.add("correct");
      this.stringsFound++;
      this.increaseNumCorrect();
      if (this.stringsFound == 6) {
        this.resetFretboard();
        this.resetNoteSelector();
        this.generateNoteToGuess();
      }
    } else {
      event.target.classList.add("wrong");
    }
    this.increaseNumGuesses();
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

  generateNoteToGuess() {
    const noteSelector = document.querySelector("[data-note-selector]");
    const notes = noteSelector.querySelectorAll("[data-notekey]");

    var select = Math.floor(Math.random() * notes.length);
    for (var i = 0; i < notes.length; ++i) {
      if (i == select) {
        notes[i].classList.add("correct");
        this.correctAns = notes[i].dataset.notekey;
      }
    }
  }

  resetFretboard() {
    const fretboardGrid = document.querySelector("[data-fretboard-grid]");
    const frets = fretboardGrid.querySelectorAll("[data-note]");

    for (var i = 0; i < frets.length; ++i) {
      frets[i].classList.remove("selected");
      frets[i].classList.remove("correct");
      frets[i].classList.remove("wrong");
    }
    return;
  }

  resetNoteSelector() {
    const noteSelector = document.querySelector("[data-note-selector]");
    const notes = noteSelector.querySelectorAll("[data-notekey]");

    for (var i = 0; i < notes.length; ++i) {
      notes[i].classList.remove("wrong");
      notes[i].classList.remove("correct");
    }
    return;
  }

  increaseNumCorrect() {
    this.numCorrect += 1;
    document.getElementById("numCorrect").innerHTML = this.numCorrect;
  }

  increaseNumGuesses() {
    this.numGuesses += 1;
    document.getElementById("numGuesses").innerHTML = this.numGuesses;
  }
}
