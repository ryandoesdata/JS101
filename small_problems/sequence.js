function sequence(num) {
  let arr = [];
  let count = 1;

  while (count <= num) {
    arr.push(count);
    count++;
  }
  return arr;
}

console.log(sequence(34));