/*

[1, 2, 3].forEach(num => {
  console.log(num * 2);
});

console.log([1, 2, 3].map(num => num * 2));


let array = [1, 2, 3];

let newArray = array.map(num => {
  return (num * num);
});

console.log(newArray);

*/


let arr = [1, 2, 3, 4, 5];

arr.fill(1, 1, 5);

console.log(arr);