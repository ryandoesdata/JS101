/*
input: a string
output: an object
rules: the object contains the percentage of letters that are uppercase, lowercase, or neither.
*/

function letterPercentages(string) {
  let obj = {};
  let length = string.length;
  let lowercaseArr = string.match(/[a-z]/g);
  
  let uppercaseArr = string.match(/[A-Z]/g);
  
  if (!lowercaseArr) {
    lowercase = 0;
  } else {
    lowercase = lowercaseArr.length;
  }
  if (!uppercaseArr) {
    uppercase = 0;
  } else {
    uppercase = uppercaseArr.length;
  }

  let neither = length - (uppercase + lowercase);
  
  obj["lowercase"] = (lowercase / length * 100).toFixed(2);
  obj["uppercase"] = (uppercase / length * 100).toFixed(2);
  obj["neither"] = (neither / length * 100).toFixed(2);

  console.log(obj);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }