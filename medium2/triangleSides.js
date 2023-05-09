/* eslint-disable max-lines-per-function */

function triangle(side1, side2, side3) {

  let counter = 0;
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);

  if (side1 - side2 === 0) {
    counter += 1;
  }
  if ((side1 - side3 === 0)) {
    counter += 1;
  }
  if ((side2 - side3 === 0)) {
    counter += 1;
  }

  if (counter === 0) {
    return "scalene";
  } else if (counter === 3) {
    return "equilateral";
  } else if ((sortedSides.find(ele => ele === 0)) !== undefined) {
    return "invalid";
  } else if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
    return "invalid";
  } else {
    return "isosceles";
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"