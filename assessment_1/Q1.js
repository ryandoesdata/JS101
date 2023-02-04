Are we allowed to run code in VS?


/* eslint-disable max-len */
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  counter += 1;
  let message = "Done!";
}

console.log(counter);
console.log(message);

/*

My answer:

The for loop increments up one by one starting from 0, as long as i is less than three.
For every increment, the value of counter is raised by 1 from its previous value.
Thus, after three increments, counter now is equal to 3.
message is declared from within the for loop body, so it is outside the scope of where console.log is calling it.

A note on formatting: Don't forget to use backticks ( ` ) to format parts of your answer as code, as stated in Assignment 04 of JS109.
At a minimum - data literals, variable names, object property names and keywords should be wrapped in backticks.

Allison: Your answer does not have inaccuracies, but it isn't to the level of detail that we require for our assessments -
as demonstrated by answer D in the Example section towards the top of the Study Guide.

Precision in language is very important for communicating without relying on the other party's assumptions.
Miscommunications can happen very easily if your language is vague and relies on the other person to fill in the holes.
These exams are an opportunity to train yourself into speaking with clarity and precision when communicating with colleagues.
Finding this balance can be very tricky and we encourage you to practice with other Launch School students.
*/

// takeaways: Format everything with code using backticks.
// Descibe everything with its technical name.
// Read example D in the study guide.