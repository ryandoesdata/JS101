/*let teddy = (20 + (Math.floor(101 * (Math.random()))));

console.log(teddy);*/

function randomBetween(min, max) {
  if ((max - min) >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor(Math.random() * (min - max + 1)) + max;
}

let age = randomBetween(120, 20);
console.log(`Teddy is ${age} years old!`);