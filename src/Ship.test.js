/* eslint-disable no-undef */
import Ship from "./Ship";

const startIndex = [0, 0];
test("ship init hit status is an array with length is ship's length, contains all false", () => {
  expect(Ship(startIndex, 3).hitStatus).toStrictEqual([false, false, false]);
});

const shipSunkTest = Ship(startIndex, 1);
shipSunkTest.hit([0, 0]);

test("ship is sunk if get hit at all position", () => {
  expect(shipSunkTest.isSunk()).toBe(true);
});
