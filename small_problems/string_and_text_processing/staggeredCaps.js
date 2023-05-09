/* eslint-disable max-lines-per-function */
function staggeredCase(string, countOtherChars = true) {
  let needUpper = true;
  let allChars = string.split("");

  if (countOtherChars) {
    return string
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
  } else {
    return allChars
      .map(char => {
        if (char >= 'a' && char <= 'z') {
          if (needUpper) {
            needUpper = false;
            return char.toUpperCase();
          } else if (needUpper === false) {
            needUpper = true;
            return char.toLowerCase();
          }
        } else {
          return char;
        }
      })
      .join("");
  }
}

console.log(staggeredCase('Camel434Case'));              // "cAMELcASE"
//console.log(staggeredCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"