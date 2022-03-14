startGame();
const correctAns = generateFretToGuess();
console.log("Correct answer is " + correctAns);

function startGame() {
  document.addEventListener("click", handleMouseClick);
}

function stopGame() {
  document.removeEventListener("click", handleMouseClick);
}

function handleMouseClick(e) {
  if (e.target.matches("[data-note]")) {
    console.log("You chose " + e.target.dataset.note);
    pressNote(e.target.dataset.key);
    return;
  }

  // TODO - handle other possible mouse clicks
}

function pressNote(e) {
  // TODO
  return;
}

function generateFretToGuess() {
  const fretboardGrid = document.querySelector("[data-fretboard-grid]");
  const frets = fretboardGrid.querySelectorAll("[data-note]");

  var select = Math.floor(Math.random() * frets.length);
  for (var i = 0; i < frets.length; ++i) {
    if (i == select) {
      frets[i].className = "fret selected";
      return frets[i].dataset.note;
    }
  }
}
