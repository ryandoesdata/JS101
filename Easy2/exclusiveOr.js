function xor(x, y) {
  if ((x && !y) || (y && !x)) {
    return true;
  }
    return false;
};

console.log(xor(5, false));
