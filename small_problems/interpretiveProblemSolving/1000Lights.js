/* understanding the problem

input: a number
output: an array

rules:
The input represents the length of the "string of lights". The number of lights.
All the lights are on at first.
Second round, lights are toggled by every other starting at 1 (non inclusive)
Third round, every 3rd light is toggled.
etc...

Examples are provided

Data structures:
toggle numbers using times -1. Every number starts positive. filter negatives at the end.

use a loop, with every iteration, if number % i = 0, toggle number, ie multiply by -1.

algorithm:
turn the input into an array of 1, 2, 3, etc... use a loop to push into a new array.

iterate through the new array, checking if number % i = 0. if true, toggle number.

stopping condition is end of array. array.length - 1.

filter array to remove negative numbers.

code:
*/

function lightsOn(lights) {
  let arr = [];

  for (let i = 1; i <= lights; i += 1) { // makes an array of the individual lights
    arr.push(i);
  }

  for (let j = 2; j <= arr.length; j += 1) { // j represents the starting point of each pass through the lights, as well as the interval of lights to be toggled.
    for (let k = 1; k < arr.length; k += 1) { // iterates through all the switches, starting with index position 1, because index position 0 will always be on.
      if (arr[k] % j === 0) { // if the current light is a multiple of j, toggle current light
        arr[k] *= -1;
      }
    }
  }
  return arr.filter(num => num > 0); // filters array to remove numbers that are negative, or "off"
}

console.log(lightsOn(29));


/* ALTERNATIVE 6/14/2023

/* input: a number
output: an array
rules: every pass of toggling lights increases the starting point and the muliple by 1.
-----------------------------------------------------------

Test cases are provided
-----------------------------------------------------------

Data structures:
A loop
A toggle variable with a boolean value. Or simply toggle the numbers from positive to negative
Spread syntax to populate an array with all the values.
-----------------------------------------------------------

Algorithm:
create an array with integers 1 through num
initialize a counter variable with a value of 2
declare a for loop to end when counter equals array.length;
if arr[i] % counter === 0
arr[i] *= -1
filter for positive numbers;
-----------------------------------------------------------

Code:
*/

function lightsOn(switches) {
  let arr = [];
  let i = 1;
  while (i <= switches) {
    arr.push(-i);
    i += 1;
  }

  for (let j = 1; j <= arr.length; j += 1) {
    arr.forEach((ele) => {
      if ((ele % j) === 0) {
        arr[arr.indexOf(ele)] *= -1;
      }
    });
  }
  console.log(arr.filter(ele => ele > 0));
}

lightsOn(100); 

