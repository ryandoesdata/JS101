let sum = num => String(num).split('').reduce((a, b) => a + Number(b), 0);

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45