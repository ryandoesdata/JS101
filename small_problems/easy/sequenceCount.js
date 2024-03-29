function sequence(count, num) {
  let arr = [];
  let staticNum = num;
  while (count > 0) {
    arr.push(num);
    num += staticNum;
    count--;
  }
  return arr;
}

function sequence(count, num) {
  let arr = [];
  let currentNum = num;
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(currentNum);
    currentNum += num;
  }
  console.log(arr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []