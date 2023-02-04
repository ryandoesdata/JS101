/*
Console.log is a method
*/

let firstName = "Bob";
let lastName = "Smith";
let fullName;

function generateFullName(firstName, lastName) {
  fullName = firstName + " " + lastName;
}

generateFullName();
console.log(fullName);

/*
Takeaways:
Run code.
console.log method will log...
walk through code line by line, explaining everything.

This one needs work, why is console.log logging `undefined undefined`?
*/