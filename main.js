function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // attach event listener
  cell.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#333";
  });
  return cell;
}

function generateBoard() {
  const board = document.querySelector(".board");
  board.textContent = "";

  const SIZE = 16;

  for (let rowIndex = 0; rowIndex < SIZE; rowIndex++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let colIndex = 0; colIndex < SIZE; colIndex++) {
      const cell = createCell();
      row.append(cell);
    }
    board.append(row);
  }
}

generateBoard();
