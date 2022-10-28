function triangle(n) {
  for (let i = 0; i <= n; i += 1) {
    let whiteSpace = (' ');
    let asterisk = ('*'); 
    console.log(`${whiteSpace.repeat(n - i)}${asterisk.repeat(i)}`);
  }
}

triangle(69)