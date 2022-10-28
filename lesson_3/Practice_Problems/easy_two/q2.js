let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let backwardsNumbers = numbers.reverse(numbers.slice(0, numbers.length));

console.log(numbers);

console.log(backwardsNumbers);

/*
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/

let otherNumbers = [1, 2, 3, 4, 5];

console.log(otherNumbers);

let sortedBackwardsNumbers = otherNumbers.sort((num1, num2) => num2 - num1);

console.log(sortedBackwardsNumbers); // [ 5, 4, 3, 2, 1 ]