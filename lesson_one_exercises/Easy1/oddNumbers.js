function odds(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};

odds(99);
