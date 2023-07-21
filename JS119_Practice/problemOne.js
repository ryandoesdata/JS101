/* input: an array
output: an array
problem: Each number of the output must be the amount of numbers in the input
that are smaller than the input number of the same index.

rules: only count unique values

examples: input: [1, 2, 3, 4, 5, 5]
output: [0, 1, 2, 3, 4]

data structures:
an array and a new array

algorithm:

create an empty array to hold the output values,
that is, the amount of input numbers smaller than the output

use forEach to iterate through the values, call this compareAgainst

use a nested forEach to compare the values to compareAgainst, call these values currentValue

if currentValue is less than compareAgainst, index of compareAgainst += 1

return new array

*/

function smallerNumbersThanCurrent(arr) {

  let newArr = arr.map(ele => 0);
  //console.log(newArr);
  let arrCopy = arr.slice();

  arr.forEach((currentValue) => { // iterates through arr
    arrCopy.forEach((compareAgainst) => { // iterates through arrCopy while holding arr
      if (currentValue < compareAgainst) && (compareAgainst{ // if currentVal of arrcopy is less than holding value of arr
        newArr[arrCopy.indexOf(currentValue)] += 1;     
      }
    })
  })
  console.log(newArr);
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

8, 8, 0
8, 1, 0
8, ....

1, 8, 1
1, 1, 1
1, 2, 2
1, 2, 3
1, 
