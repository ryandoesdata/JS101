/* eslint-disable max-len */
/*
Examine the snippet below. What happens when the code runs?
Are steph on line 1 and line 4 the same variable?
Explain how you came up with your answer, and identify the underlying principle that this snippet demonstrates.
*/

let steph = 3;

function championship() {
  steph = 4;
}

championship(steph);
console.log(steph);

// Takeaways: Steph is being passed by value. So the change does not occur outside the function body.
// When they ask to descibe what happens when the code is run, go line by line. Describe in DETAIL!
// Underlying principle is the parameter is being passed-by-value and how it does not mutate the global variable.
// Again, console.log does not return the value. It logs it to the console.