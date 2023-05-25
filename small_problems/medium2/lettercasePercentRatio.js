/* eslint-disable max-lines-per-function */
/* Understand the problem
input: a string
output: an object literal

rules:
the output will be an object with three properties
first is the percent of letters from the string that are lowercase
second is the percentage that are uppercase
third is the percent that are neither.

the keys will be "lowercase", "uppercase", and "neither"
the values will be strings with numerical digits with two decimal places

Examples are provided

Data structures:
an empty object
a variable for the length of the string
regex to find the amount of lower, upper, and neither characters

algorithm:

initialize an empty object literal
initialize a variable for the argument's length property minus whitespace
initialize variables for amount of each character category using regex
get the percent value by divided by the length variable and rounding to two decimals.
pad the end with two zeros
append the properties for each character category to the object
*/

function letterPercentages(string) {
  let obj = {};
  let stringLength = string.length;
  let lowerCasePercent;
  let upperCasePercent;
  let neitherPercent;

  function getPercent(match) {
    let charCat;
    if (match === null) {
      charCat = "0.00";
    } else {
      charCat = String((((match).join('').length / stringLength) * 100).toFixed(2));
    }
    return charCat;
  }

  lowerCasePercent = getPercent(string.match(/[a-z]+/g));
  upperCasePercent = getPercent(string.match(/[A-Z]+/g));
  neitherPercent = getPercent(string.match(/[^a-zA-Z]+/g));

  obj["lowercase"] = lowerCasePercent;
  obj["uppercase"] = upperCasePercent;
  obj["neither"] = neitherPercent;

  console.log(obj);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

