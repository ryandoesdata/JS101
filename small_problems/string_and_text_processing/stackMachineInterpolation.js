let register = 0;
let stack = [];

function ADD() {
  register += stack.pop();
}
function SUB() {
  register -= stack.pop();
}
function MULT() {
  register *= stack.pop();
}
function DIV() {
  register = Math.round(register / stack.pop());
}
function REMAINDER() {
  register %= stack.pop();
}
function POP() {
  register = stack.pop();
}
function PRINT() {
  console.log(register);
}
function PUSH() {
  stack.push(register);
}

function minilang(string) {
  let arr = string.split(" ");
  let idx = 0;

  while (idx < arr.length) {
    let ele = arr[idx];

    switch (ele) {
      case "ADD":
        ADD();
        break;
      case "SUB":
        SUB();
        break;
      case "MULT":
        MULT();
        break;
      case "DIV":
        DIV();
        break;
      case "PUSH":
        PUSH();
        break;
      case "POP":
        POP();
        break;
      case "REMAINDER":
        REMAINDER();
        break;
      case "PRINT":
        PRINT();
        break;
        default:
        register = Number(ele);
    }
    
    idx += 1;
  }

  return register;
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)