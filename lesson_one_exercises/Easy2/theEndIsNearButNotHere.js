function penultimate(words) {
  let array = words.split(' ');
  let almostLastWord = array.length - 2;
  return array[almostLastWord];
}

console.log(penultimate("hi mom and dad"));
