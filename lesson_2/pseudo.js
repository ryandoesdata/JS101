/* START
# Given two numbers

SET sum =  A function with two numbers as arguments

PRINT num1 + num2

END 

*/

/* Array of strings

START
# Given an array of strings

SET array = A function that takes an array of strings as an argument

SET iterator = 0

WHILE iterator < the length of the argument
  
PRINT the value of the current element concatinated to the previous one.
*/

/*
function array(strings) {
  console.log(strings.join(''));
  }

array(['h', 'i', ' ', 'b', 'o', 'b']);
*/

/* Every Other

START
# Given an array of numbers

SET array = an empty array. This will be for pushing the even elements into.
SET everyOther, a function with one argument called numbers.
SET iterator = 0
WHILE iterator < numbers.length
IF numbers[iterator] % 2 === 0
  array = array.push(numbers[iterator]);

PRINT array
*/

array = [];
function everyOther(numbers) {
  i = 0
  while (i <= numbers.length - 1) {
    i += 1;
    array.push(numbers[i]);
}
console.log(array);
}

everyOther([5, 3, 2, 9, 5, 2, 6, 3, 5, 4, 6])