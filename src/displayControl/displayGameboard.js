export default function displayGameboard(gameboard) {
  const div = document.createElement("div");
  div.className = "gameboard";
  const { map } = gameboard;

  for (let rowIndex = 0; rowIndex < map.length; rowIndex += 1) {
    const row = map[rowIndex];
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
      const element = row[colIndex];
      const tile = document.createElement("div");
      if (element === "water") {
        tile.className = "water tile";
      } else {
        tile.className = "ship tile";
      }
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
