function isBalanced (string) {

  function balanceCheck(charOne, charTwo) {
    let arr = string.split("").filter(char => char === charOne || char === charTwo);
    let idx = 0;

    while (idx < arr.length) {
      if ((arr[idx] === charOne) && (arr[idx + 1]) === charTwo) {
        arr.splice(idx, 2);
        idx = 0;
      } else {
        idx += 1;
      }
    }

    return !arr.length;
  }

  return balanceCheck("(", ")") &&
         balanceCheck("[", "]") &&
         balanceCheck("{", "}") &&
         balanceCheck("'", "'") &&
         balanceCheck('"', '"');
}

console.log(isBalanced("What (is)'' this?") === true);
console.log(isBalanced("What is)[ this?") === false);
console.log(isBalanced("'What (is this?") === false);
console.log(isBalanced("'((What) (is this))?'") === true);
console.log(isBalanced("((What))' (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")He{y!(") === false);
console.log(isBalanced("What }((is))) up(") === false);