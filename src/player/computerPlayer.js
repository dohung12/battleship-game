import Player from "./Player";

export default class Computer extends Player {
  constructor() {
    super();
    this.lastAttackStt = "";
    this.suspiciousTiles = [];
  }

  recordSuspiciousTiles(gameboard) {
    const index = this.recordedAttack[this.recordedAttack.length - 1];
    const row = index[0];
    const col = index[1];
    [
      [row, col - 1],
      [row, col + 1],
      [row + 1, col],
      [row - 1, col],
    ].forEach((element) => {
      if (
        !this.checkAttacked(element) &&
        element[0] < gameboard.boardSize[0] &&
        element[1] < gameboard.boardSize[1]
      ) {
        this.suspiciousTiles.push(element);
      }
    });
  }

  randomAttack(gameboard) {
    function random(num) {
      return Math.floor(Math.random() * num);
    }
    let row = random(gameboard.boardSize[0]);
    let col = random(gameboard.boardSize[1]);

    while (this.checkAttacked([row, col])) {
      row = random(gameboard.boardSize[0]);
      col = random(gameboard.boardSize[1]);
    }
    return [row, col];
  }

  attackTiles(gameboard) {
    if (this.lastAttackStt === "hit") {
      this.recordSuspiciousTiles(gameboard);
    }

    if (this.suspiciousTiles.length > 0) {
      return this.suspiciousTiles.pop();
    }

    return this.randomAttack(gameboard);
  }

  computerTurn(gameboard) {
    const [row, col] = this.attackTiles(gameboard);
    this.lastAttackStt = gameboard.receiveAttack(row, col);
    this.recordedAttack.push([row, col]);
    return [row, col];
  }
}
