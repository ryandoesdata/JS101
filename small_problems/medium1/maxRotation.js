function maxRotation(num) {
  let arr = String(num).split('');
  let i = 0;
  
  while (i < arr.length) {
    arr.push(arr.splice(i, 1));
    i += 1;
  }
  console.log(Number(arr.join('')))
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845