/*
You've missed two of the variables.
You've also missed four of the primitive values.
Finally, you've missed one of the objects.
*/


function snacks(value) {
  let tasty = "chips";

  let foo = {
    healthy: "apples", //key value pairs: 4 strings?
    tasty: tasty,
    protein: "beef jerky",
  };

  let bar = foo; //do reused variables count?
  // ^^ foo becomes an object. So that's two objects.

  return bar; //do reused variables count?
}

snacks();

/* if all above questions are yes:
A variable named tasty is declared on line 9 and assigned the value of "chips" with a datatype of string.
A variable named foo is declared on line 11 and assigned an object with three properties, or key-value pairs.
The variable tasty from line 9 is assigned on line 13 as a value to the key tasty within the object foo.
A variable named bar is declared on line 17 and assigned the value of the variable foo. 
See below for result:

bar = {
    healthy: "apples", //key value pairs: 4 strings?
    tasty: tasty,
    protein: "beef jerky",
  };

The function returns the variable bar on line 20.

All in all, there are three variables declared and five instances of variables being used.

The variable bar is assigned the value of the variable foo, so there are two objects.

Where are the primative values?