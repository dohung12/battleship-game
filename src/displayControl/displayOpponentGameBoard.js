export default function displayOpponentGameboard(gameboard) {
  const div = document.createElement("div");
  div.className = "gameboard";
  const { boardSize } = gameboard;

  for (let rowIndex = 0; rowIndex < boardSize[0]; rowIndex += 1) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let colIndex = 0; colIndex < boardSize[1]; colIndex += 1) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.setAttribute("data-row", rowIndex);
      tile.setAttribute("data-col", colIndex);
      rowDiv.appendChild(tile);
    }

    div.appendChild(rowDiv);
  }

  const colIndexDisplay = document.createElement("div");
  colIndexDisplay.className = "col-index";
  for (let i = 0; i < gameboard.boardSize[1]; i += 1) {
    const colIndex = document.createElement("div");
    colIndex.className = "col-index-tile";
    colIndex.textContent = i + 1;
    colIndexDisplay.appendChild(colIndex);
  }

  div.appendChild(colIndexDisplay);
  return div;
}
