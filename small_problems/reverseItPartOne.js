function reverseWords(string) {
  let arr = string.split(' ');
  return arr.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

function reverse(list) {

  let last = list.length - 1;

  while (last >= 0) {
    list.push(list[last]);
    last--;
  }

  if (list.length === 2) {
    list.shift(0);

  } else {

    while (last <= (list.length / 2)) {
      list.shift(0);
      last++;
    }

  }
  return list;
}