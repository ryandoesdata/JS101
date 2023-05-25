doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

function doubleConsonants(string) {
  let lookUp = {
    B: "b", C: "c", D: "d",
    F: "f", G: "g", H: "h",
    J: "j", K: "k", L: "l",
    M: "m", N: "n", P: "p",
    Q: "q", R: "r", S: "s",
    T: "t", V: "v", W: "w",
    X: "x", Y: "y", Z: "z"
  };
  console.log(string.split("").map((char) => {
    if (lookUp[char.toUpperCase()]) {
      return char + char;
    }
    return char;
  }).join(""));
}