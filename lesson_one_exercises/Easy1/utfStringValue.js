function utfString(string) {

  let total = 0;

  for (let i = 0; i < string.length; i += 1) {
    total += string.charCodeAt(i);
  }
return total; 
}

console.log(utfString("Launch School"));
