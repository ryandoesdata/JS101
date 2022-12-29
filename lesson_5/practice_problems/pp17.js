function getUUID() {
  let array = [];
  let i = 0;
    while (i < 32) {
      let character = Math.floor(Math.random() * 16);
      if (character < 10) {
        array.push(character);
      } else if (character === 10) {
        array.push('a');
      } else if (character === 11) {
        array.push('b');
      } else if (character === 12) {
        array.push('c');
      } else if (character === 13) {
        array.push('d');
      } else if (character === 14) {
        array.push('e');
      } else if (character === 15) {
        array.push('f');
      }
i += 1;
  }
  let firstGroup = array.slice(0, 8).join('');
  let secondGroup = array.slice (8, 12).join('');
  let thirdGroup = array.slice (13, 17).join('');
  let fourthGroup = array.slice(18, 22).join('');
  let fifthGroup = array.slice(23, 31).join('');
  return `${firstGroup}-${secondGroup}-${thirdGroup}-${fourthGroup}-${fifthGroup}`
};
console.log(getUUID());