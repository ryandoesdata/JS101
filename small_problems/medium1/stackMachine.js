/* stack machine interpretation

input: a string
output: a number or multiple console logs with numbers

rules: each "word" in the string is either a command or an input.

The stack.pop(input) is the current value. It starts at 0.
The stack is initialized as an empty array.

examples are provided

minilang('5 PUSH 3 MULT PRINT');
stack.pop(input) = 5
5 is pushed into the stack
stack.pop(input) = 3
5 is popped from stack and multiplied by 3. stack.pop(input) = 15.
15 is printed.

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
stack.pop(input) = 5
print 5
5 is pushed into the stack
stack.pop(input) equals 3
print 3
5 is popped from stack and added to 3. stack.pop(input) = 8
print 8.

data structures:
an array.
if statements for each command

forEach to execute each command.

code:

*/

function minilang (string) {
  let arr = string.split(" ");
  let register = 0;
  let stack = [];

  if (!arr.includes("PUSH")) {
    console.log("Error, stack empty.");
  
  } else {

  console.log(arr.forEach((input) => 
   
    {
     if (!isNaN(Number(input))) {
        register = Number(input);
     }
      if (input === "PUSH") {
        stack.push(register);
     }
      if (input === "ADD") {
        register += stack.pop();
     }
      if (input === "SUB") {
        register -= stack.pop();
     }
     if (input === "MULT") {
       register *= stack.pop();
     }
      if (input === "DIV") {
       register /= stack.pop();
     }
     if (input === "REMAINDER") {
        register %= stack.pop();
     } 
      if (input === "POP") {
        register = stack.pop();
     }
      if (input === "PRINT") {
        console.log(register);
     }
    }));
  }
}

//minilang('PRINT');
// 0

//minilang('5 PUSH 3 MULT PRINT');
// 15

//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT'); 7/3, [3]
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
