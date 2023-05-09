/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
function isBalanced(string) {
  let chars = ["(", ")", '"', "'", "{", "}", "[", "]"];
  let charsArr = string.split('').filter(char => chars.includes(char));
  let rightChars = ["(", "[", "{",];
  let leftChars = [")", "]", "}"];
  let eitherChars = ["'", '"'];
  let rightChar = charsArr.filter(char => rightChars.includes(char));
  let leftChar = charsArr.filter(char => leftChars.includes(char));
  let eitherChar = charsArr.filter(char => eitherChars.includes(char));

  function balanceCheck(right, left, all, charOne, charTwo) {
    if ((right.length === left.length) && (all[0] !== charOne) && (all[all.length - 1] !== charTwo)) {
      return true;
    }
    return false;
  }

  function quoteCheck(arr) {
    return arr.length % 2 === 0;
  }

  let paraCheck = balanceCheck(rightChar, leftChar, charsArr, ")", "(");
  let curlyCheck = balanceCheck(rightChar, leftChar, charsArr, "{", "}");
  let bracketCheck = balanceCheck(rightChar, leftChar, charsArr, "[", "]");
  let otherCheck = quoteCheck(eitherChar);

  if ((paraCheck === true) && (curlyCheck === true) && (bracketCheck === true) && (otherCheck === true)) {
    return true;
  }
  return false;
}

console.log(isBalanced("What (is)'' this?") === true);
console.log(isBalanced("What is)[ this?") === false);
console.log(isBalanced("'What (is this?") === false);
console.log(isBalanced("'((What) (is this))?'") === true);
console.log(isBalanced("((What))' (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")He{y!(") === false);
console.log(isBalanced("What }((is))) up(") === false);