function generateBoard() {
  const board = document.querySelector(".board");
  board.textContent = "";

  const SIZE = 16;

  for (let rowIndex = 0; rowIndex < SIZE; rowIndex++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let colIndex = 0; colIndex < SIZE; colIndex++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.append(cell);
    }
    board.append(row);
  }
}

generateBoard();
