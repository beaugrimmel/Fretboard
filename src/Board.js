import Guess from "./Guess.js";

export default class Board {
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.fret = new Image();
    this.fret.src = "imgs/fret.png";

    this.#loadImages();

    this.selectedString = null;
    this.selectedFret = null;
    this.selectedNote = null;
  }

  // 0 - blank
  // 1 - selected
  // 2 - up dot
  // 3 - down dot
  map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  notes = [
    [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3],
    [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  ];

  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        let tile = this.map[row][col];
        if (tile === 0) {
          this.#drawFret(ctx, col, row, this.tileSize);
        }
        if (tile === 1) {
          this.#drawFretUp(ctx, col, row, this.tileSize);
        }
        if (tile === 2) {
          this.#drawFretDn(ctx, col, row, this.tileSize);
        }
        if (tile === 3) {
          this.#drawFretSelect(ctx, col, row, this.tileSize);
        }
        if (tile === 4) {
          this.#drawFretUpSelect(ctx, col, row, this.tileSize);
        }
        if (tile === 5) {
          this.#drawFretDnSelect(ctx, col, row, this.tileSize);
        }
      }
    }
  }

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }

  selectRandomFret() {
    // Clear current
    if (this.selectedFret != null && this.selectedString != null) {
      if (this.map[this.selectedString - 1][this.selectedFret - 1] == 3)
        this.map[this.selectedString - 1][this.selectedFret - 1] = 0;
      if (this.map[this.selectedString - 1][this.selectedFret - 1] == 4)
        this.map[this.selectedString - 1][this.selectedFret - 1] = 1;
      if (this.map[this.selectedString - 1][this.selectedFret - 1] == 5)
        this.map[this.selectedString - 1][this.selectedFret - 1] = 2;
    }

    // Generate random
    var stringNum = this.#random(1, 6);
    var fretNum = this.#random(1, 12);

    // Set tile
    if (this.map[stringNum - 1][fretNum - 1] == 0)
      this.map[stringNum - 1][fretNum - 1] = 3;
    if (this.map[stringNum - 1][fretNum - 1] == 1)
      this.map[stringNum - 1][fretNum - 1] = 4;
    if (this.map[stringNum - 1][fretNum - 1] == 2)
      this.map[stringNum - 1][fretNum - 1] = 5;

    // Set selcted atribs
    this.selectedString = stringNum;
    this.selectedFret = fretNum;
    this.selectedNote = this.notes[stringNum - 1][fretNum - 1];
  }

  #random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  #drawFret(ctx, col, row, size) {
    ctx.drawImage(
      this.fret,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawFretUp(ctx, col, row, size) {
    ctx.drawImage(
      this.fretUp,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawFretDn(ctx, col, row, size) {
    ctx.drawImage(
      this.fretDn,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawFretSelect(ctx, col, row, size) {
    ctx.drawImage(
      this.fretSelect,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawFretUpSelect(ctx, col, row, size) {
    ctx.drawImage(
      this.fretUpSelect,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #drawFretDnSelect(ctx, col, row, size) {
    ctx.drawImage(
      this.fretDnSelect,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }

  #loadImages() {
    this.fret = new Image();
    this.fret.src = "imgs/fret.png";

    this.fretUp = new Image();
    this.fretUp.src = "imgs/fret-dot-up.png";

    this.fretDn = new Image();
    this.fretDn.src = "imgs/fret-dot-dn.png";

    this.fretSelect = new Image();
    this.fretSelect.src = "imgs/fret-select.png";

    this.fretUpSelect = new Image();
    this.fretUpSelect.src = "imgs/fret-dot-up-select.png";

    this.fretDnSelect = new Image();
    this.fretDnSelect.src = "imgs/fret-dot-dn-select.png";
  }
}
