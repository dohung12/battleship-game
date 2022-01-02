export default function displayGameboard(gameboard) {
  const div = document.createElement("div");
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
  return div;
}
