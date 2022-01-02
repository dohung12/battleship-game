import Ship from "./Ship";

const Gameboard = (width, height) => {
  const shipArr = [];
  const missedShot = [];
  const map = [];
  for (let i = 0; i < height; i += 1) {
    const element = [];
    for (let j = 0; j < width; j += 1) {
      element.push("water");
    }
    map.push(element);
  }

  const addShip = (coord, length) => {
    const ship = Ship(coord, length);
    shipArr.push(ship);
    return ship;
  };

  const placeShip = (shipLength, row, col, placedDirection = "horizontal") => {
    const ship = addShip([row, col], shipLength);

    // when placing obj, it is pointing to memory location of that object, not duplicate object itself
    if (placedDirection === "horizontal") {
      for (let indexX = 0; indexX < shipLength; indexX += 1) {
        map[row][col + indexX] = ship;
      }
    } else if (placedDirection === "vertical") {
      for (let indexY = 0; indexY < shipLength; indexY += 1) {
        map[row + indexY][col] = ship;
      }
    }
  };

  const receiveAttack = (row, col) => {
    if (map[row][col] === "water") {
      missedShot.push([row, col]);
      return "miss";
    }
    const ship = map[row][col];
    ship.hit([row, col]);
    return "hit";
  };

  const allShipsAreSunk = () => shipArr.every((ship) => ship.isSunk() === true);
  return {
    boardSize: [height, width],
    map,
    placeShip,
    receiveAttack,
    allShipsAreSunk,
  };
};

export default Gameboard;
