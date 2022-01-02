const Ship = (startIndex, length) => {
  const statusArr = [];
  for (let index = 0; index < length; index += 1) {
    statusArr.push(false);
  }
  let sunkStatus = false;

  const hitStatus = statusArr;

  const hit = (coord) => {
    const place = Math.sqrt(
      (startIndex[0] - coord[0]) ** 2 + (startIndex[1] - coord[1]) ** 2
    );
    statusArr[place] = true;
  };

  const isSunk = () => {
    sunkStatus = statusArr.every((element) => element === true);
    return sunkStatus;
  };
  return { hitStatus, hit, isSunk };
};

export default Ship;
