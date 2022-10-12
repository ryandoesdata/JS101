let cleanArray = [];
function cleanUp(string) {
  let messyArray = string.split('')
  for (let i = 0; i < messyArray.length; i += 1) {
    let alphaCar = messyArray[i];
    switch(alphaCar) {
      case 'a':
        cleanArray.push('a');
        break;
      case 'b':
        cleanArray.push('b');
      case 'c':
        cleanArray.push('c');
        break;
      case 'd':
        cleanArray.push('d');
        break;
      case 'e':
        cleanArray.push('e');
        break;
      case 'f':
        cleanArray.push('f');
        break;
      case 'g':
        cleanArray.push('g');
        break; 
      case 'h':
        cleanArray.push('h');
        break;
      case 'i':
        cleanArray.push('i');
        break;
      case 'j':
        cleanArray.push('j');
        break;
      case 'k':
        cleanArray.push('k');
        break;
      case 'l':
        cleanArray.push('l');
        break;
      case 'm':
        cleanArray.push('m');
        break;
      case 'n':
        cleanArray.push('n');
        break;
      case 'o':
        cleanArray.push('o');
        break;
      case 'p':
        cleanArray.push('p');
        break;
      case 'q':
        cleanArray.push('q');
        break;
      case 'r':
        cleanArray.push('r');
        break;
      case 's':
        cleanArray.push('s');
        break;
      case 't':
        cleanArray.push('t');
        break;
      case 'u':
        cleanArray.push('u');
        break;
      case 'v':
        cleanArray.push('v');
        break;
      default:
        cleanArray.push(' ');
    }
  }
  console.log(cleanArray.join(''));
}
cleanUp('hello! %t 0he re');