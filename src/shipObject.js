const ship = (length) => {
  const hitStatus = () => {
    const statusArr = [];
    for (let index = 0; index < length; index += 1) {
      statusArr.push(false);
    }
    return statusArr;
  };

  return { length, hitStatus };
};

export default ship;
