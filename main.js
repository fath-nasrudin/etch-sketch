function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // attach event listener
  cell.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#333";
  });
  return cell;
}

function generateBoard(size = 16) {
  const board = document.querySelector(".board");
  board.textContent = "";

  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let colIndex = 0; colIndex < size; colIndex++) {
      const cell = createCell();
      row.append(cell);
    }
    board.append(row);
  }
}

function appendEvents() {
  // append button event
  const changeSizeButton = document.querySelector(".js-change-size");
  changeSizeButton.addEventListener("click", () => {
    const newSize = Number(window.prompt("Change size, 1 - 100"));
    if (newSize > 100 || newSize < 1 || isNaN(newSize)) return;
    generateBoard(newSize);
  });
}

function main() {
  appendEvents();
  generateBoard();
}

main();
