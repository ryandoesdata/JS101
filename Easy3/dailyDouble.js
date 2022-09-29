function crunch(string) {
  let array = string.split('');
    for (let i = 0; i < array.length; i++) {
      let char = array[i];
      let repeats = array[i + 1];
      let newArray = [];
    if (char === repeats) {
      array.slice(char, repeats);
    }
 return newArray.push([char]);
  }
}

console.log(crunch("tthhiiss wwiill nnoott wwoorrkk"));

      
