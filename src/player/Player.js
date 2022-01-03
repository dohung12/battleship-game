export default class Player {
  constructor() {
    this.recordedAttack = [];
  }

  checkAttacked(coord) {
    // return true if choosed tile is already been attacked
    let flag = false;
    this.recordedAttack.forEach((element) => {
      if (JSON.stringify(element) === JSON.stringify(coord)) {
        flag = true;
      }
    });
    return flag;
  }

  attack(row, col, gameboard) {
    if (!this.checkAttacked([row, col])) {
      // stop player from choosing already attacked tiles
      gameboard.receiveAttack(row, col);
      this.recordedAttack.push([row, col]);
      return true;
    }
    return false;
  }
}
