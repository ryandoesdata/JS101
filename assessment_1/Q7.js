let bar = function () {
  return (foo) => foo;
};

let qux = (bar) => console.log(bar);

qux(bar()("APM"));
console.log(typeof bar());

/*
1. Run Code.
2. Console.log method logs....
3. What concept? Why does qux(bar()("APM")); return just "APM" but que(bar())
returns [Function (anonymous)]?

Big Question for Owen

*/