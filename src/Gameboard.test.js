/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
import Gameboard from "./Gameboard";

let gameboard;
beforeEach(() => {
  gameboard = Gameboard(5, 5);
});

afterEach(() => {
  gameboard = undefined;
});

test("test received attack on water tile", () => {
  gameboard.placeShip(3, 0, 0, "horizontal");
  const result = gameboard.receiveAttack(0, 0);
  expect(result).toBe("hit");
});

test("test received attack on water tile", () => {
  gameboard.placeShip(3, 0, 0, "horizontal");
  const result = gameboard.receiveAttack(3, 3);
  expect(result).toBe("miss");
});

test("test all ship are sunk", () => {
  gameboard.placeShip(1, 0, 0, "vertical");
  gameboard.placeShip(2, 1, 1, "vertical");
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(2, 1);
  const result = gameboard.allShipsAreSunk();
  expect(result).toBe(true);
});

test("test some ships are sunk, but some not", () => {
  gameboard.placeShip(3, 1, 1, "vertical");
  gameboard.placeShip(1, 0, 0, "vertical");
  gameboard.receiveAttack(0, 0);
  const result = gameboard.allShipsAreSunk();
  expect(result).toBe(false);
});
