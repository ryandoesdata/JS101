function shortLongShort(x, y) {
  if (x.length < y.length) {
    console.log(x + y + x);
  } else {
    console.log(y + x + y);
  }
};

shortLongShort('hi', 'Hello');
