import displayGameboard from "./displayControl/displayGameboard";
import displayOpponentGameboard from "./displayControl/displayOpponentGameBoard";
import Gameboard from "./Gameboard";
import Player from "./player/Player";
import Computer from "./player/computerPlayer";

const v = "vertical";
const h = "horizontal";
const gb1 = document.querySelector(".player1-gameboard");
const gb2 = document.querySelector(".player2-gameboard");
const gameStatus = document.querySelector(".game-status");

function displayAttackedTile(tile, gameboard) {
  const { row, col } = tile.dataset;
  const { map } = gameboard;
  tile.classList.add("attacked");

  if (map[row][col] !== "water") {
    tile.classList.add("ship");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-times");

    tile.appendChild(icon);
  } else if (map[row][col] === "water") {
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-circle");

    tile.appendChild(icon);
  }
}

const Game = (() => {
  const player1 = new Player();
  const playerGameboard = Gameboard(10, 10);

  const computer = new Computer();
  const computerGameboard = Gameboard(10, 10);

  // hardcode place ship on gameboard
  playerGameboard.placeShip(3, 2, 1, h);
  playerGameboard.placeShip(4, 1, 6, v);
  playerGameboard.placeShip(3, 2, 9, v);
  playerGameboard.placeShip(5, 6, 5, h);
  playerGameboard.placeShip(2, 8, 3, h);

  computerGameboard.placeShip(3, 1, 1, v);
  computerGameboard.placeShip(3, 3, 4, v);
  computerGameboard.placeShip(5, 5, 7, v);
  computerGameboard.placeShip(2, 6, 1, h);
  computerGameboard.placeShip(4, 8, 1, h);

  //   display 2 gameboard on HTML
  const pGb = displayGameboard(playerGameboard);
  gb1.appendChild(pGb);
  const cGb = displayOpponentGameboard(computerGameboard);
  gb2.appendChild(cGb);

  // stop player from clicking after game end
  function endGame() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      // eslint-disable-next-line no-use-before-define
      tile.removeEventListener("click", playerTurn);
    });
  }

  // checkwin
  function checkWin(gameboard) {
    if (gameboard.allShipsAreSunk()) {
      endGame();
      return true;
    }
    return false;
  }
  // computer turn
  function computerTurn() {
    // computer takes turn after player has succesfully attacked
    // (not clicked on already attacked tile)

    // using settimeout make delay, create sense of competing real player
    setTimeout(() => {
      const attackedTileIndex = computer.computerTurn(playerGameboard);
      const tile = gb1.querySelector(
        `[data-row='${attackedTileIndex[0]}'][data-col='${attackedTileIndex[1]}']`
      );
      displayAttackedTile(tile, playerGameboard);
      if (checkWin(playerGameboard)) {
        gameStatus.textContent = "computer has win";
      }

      gameStatus.textContent = "Player's turn";
    }, 700);
  }
  //   player attacks on computer's gameboard
  function playerTurn(e) {
    const tile = e.currentTarget;
    const { row, col } = tile.dataset;
    const result = player1.attack(row, col, computerGameboard);

    if (result) {
      displayAttackedTile(tile, computerGameboard);
      if (checkWin(computerGameboard)) {
        gameStatus.textContent = "Player has win";
      } else if (!checkWin(computerGameboard)) {
        gameStatus.textContent = "Computer's turn";
        computerTurn();
      }
    }
  }
  //   event handler for each tile
  //   let player attack computer's gameboard by clicking
  const computerGbTiles = gb2.querySelectorAll(".tile");
  computerGbTiles.forEach((tile) => {
    tile.addEventListener("click", playerTurn);
  });
})();

export default Game;
