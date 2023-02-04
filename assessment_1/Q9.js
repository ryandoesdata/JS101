let a = "apple";
let b = "custard";
let c = ["banana"];
let d = "jam";

a = b;
b += " supreme";
d = c;
c.push("honey");

console.log(a); // custard
console.log(b); // custard supreme
console.log(c); // ['banana', 'honey']
console.log(d); // ['banana', 'honey']

/*
Again, go in detail line by line. Even to the level of assignment operators! +=
Go into detail about exactly what methods do. .push adds something (what?) to the end
of an array.
Again, assignment operators. Explain precicely that the = assignment operator 
makes variable d equal to variable c. And point to the same array value. 
Explain the difference between assigning objects and assigning primative values.

READ INSTRUCTIONS. If they ask for an explaination as to why line 7 is different from line
9, explain the difference between the += operator and the .push method.
*/


