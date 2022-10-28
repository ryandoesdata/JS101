let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log('Herman' in ages);

/* or

Object.prototype.hasOwnProperty();

*/

console.log(ages.hasOwnProperty("Spot"));