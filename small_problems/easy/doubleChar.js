function repeater(string) {
  let idx = 0;
  let newString = [];
  while (idx < string.length) {
    newString.push(string[idx].repeat(2));
    idx++;
  }
  console.log(newString.join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""