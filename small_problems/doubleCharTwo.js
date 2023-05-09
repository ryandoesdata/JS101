function repeater(string) {
  let charArr = string.split('');

  let result = charArr.filter(char => (char ===))

  console.log(newString.join(''));
}


/*
    if (string.charCodeAt[idx] !== 72) {
      newString.push(string[idx]);
    } else {
      newString.push(string[idx].repeat(2));
      idx++;
    }
    console.log(newString.join(''));
  }
}
*/

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""