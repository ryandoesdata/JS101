function cleanUpp(string) {
  return string.replace(/[^a-z]/gi, ' ');
}

console.log(cleanUpp("---what's my +*& line?"));    // " what s my line "

function cleanUp(string) {
  return string.replace(/[^a-z]/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));