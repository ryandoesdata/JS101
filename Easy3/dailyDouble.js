function crunch(string) {
  let index = 0;
  let crunchText = '';

while (index <= string.length - 1) {
  if (string[index] !== string[index + 1]) { 
    (crunchText += string[index]);
    }
  index += 1;
  }
return crunchText;
};

console.log(crunch('tteesstt110022'));

      
