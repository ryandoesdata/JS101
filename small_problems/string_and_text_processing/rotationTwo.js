function rotateRightmostDigits(num, digit) {
  let arr = String(num).split("");
  let selectNums = arr.slice(-digit);

  selectNums = selectNums.concat(selectNums.shift());

  arr.splice(-digit, arr.length, selectNums);

  console.log(Number(arr.flat().join("")));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917