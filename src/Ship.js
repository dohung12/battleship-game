const ship = (startIndex, length) => {
  const statusArr = [];
  for (let index = 0; index < length; index += 1) {
    statusArr.push(false);
  }
  let sunkStatus = false;

  const hitStatus = statusArr;

  const hit = (num) => {
    statusArr[num] = true;
  };

  const isSunk = () => {
    sunkStatus = statusArr.every((element) => element === true);
    return sunkStatus;
  };
  return { startIndex, length, hitStatus, hit, isSunk };
};

export default ship;
module.exports = ship;
