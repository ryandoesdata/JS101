function sequence(num) {
  let arr = [];
  let idx = 1;

  while (idx <= num) {
    arr.push(idx);
    idx++;
  }
  return arr;
}

console.log(sequence(34));