function multiplicativeAverage(arr) {
  const initialValue = 1;

  const productWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  );

  let fullAverage = String(productWithInitial / arr.length);
  let averageWithoutDecimals = fullAverage.substring(0, fullAverage.indexOf("."));
  let decimals = fullAverage.substring(fullAverage.indexOf(".") + 1);
  let longDecimals = Math.round(Number(decimals.slice(0, 3) + "." + decimals.slice(3)));

  if (decimals.length === 2) {
    return averageWithoutDecimals.concat(`.${decimals}0`);
  } else if (decimals.length === 1) {
    return averageWithoutDecimals.concat(`.${decimals}00`);
  } else if (decimals.length === 0) {
    return averageWithoutDecimals.concat(`.${decimals}000`);
  } else {
    return `${averageWithoutDecimals}.${longDecimals}`;
  }
}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"