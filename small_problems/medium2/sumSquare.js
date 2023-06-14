/* input: A number
Output: a number
Rules: the output number is the difference between the square of the sum of the first count positive integers
and the sum of the squares of the first count positive integers.

*/

let sumSquareDifference = num =>  

console.log([...Array(num)].map((_ele, idx) => idx + 1).reduce((a, b) => a + b) ** 2 
                                  - 
[...Array(num)].map((_ele, idx) => idx + 1).reduce((a, b) => a + b**2));


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150