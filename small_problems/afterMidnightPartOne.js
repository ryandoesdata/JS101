/*
input: An integer
output: A string

rules: no using Date class methods

examples and test cases


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


Data structure

A function with one argument
One variable for the time of day without remainder
One variable for remainder
if statements for...

*/

console.log((-1437 % 1440) + 1440);
console.log(3 % 60);

function afterMidnight(string) {
  let hour = Number(string.slice(0, 2));
  let minute = Number(string.slice(3));
  let totalMinutesAfterMidnight = (hour * 60) + minute;

  if (totalMinutesAfterMidnight === 1440) {
    return 0;
  }
  return totalMinutesAfterMidnight;
}

function beforeMidnight(string) {
  let hour = Number(string.slice(0, 2));
  let minute = Number(string.slice(3));
  let totalMinutesBeforeMidnight = 1440 - ((hour * 60) + minute);

  if (totalMinutesBeforeMidnight === 1440) {
    return 0;
  }
  return totalMinutesBeforeMidnight;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);