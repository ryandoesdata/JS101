function swapCase (string) {
  let caps = string.match(/[A-Z]/g);
  return string
    .split("")
    .map((char) => {
      if (caps.includes(char)) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"