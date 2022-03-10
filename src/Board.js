export default class Board {
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.fret = new Image();
    this.fret.src = "imgs/fret.png";

    this.fretSelect = new Image();
    this.fretSelect.src = "imgs/fret-select.png";
  }

  // 0 - blank
  map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        let tile = this.map[row][col];
        if (tile === 0) {
          this.#drawFret(ctx, col, row, this.tileSize);
        }
        if (tile === 1) {
          this.#drawFretSelect(ctx, col, row, this.tileSize);
        }
      }
    }
  }

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }

  selectRandomFret() {
    var stringNum = this.#random(1, 6);
    var fretNum = this.#random(1, 12);
    this.map[stringNum - 1][fretNum - 1] = 1;
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

  #drawFretSelect(ctx, col, row, size) {
    ctx.drawImage(
      this.fretSelect,
      col * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
}
