// eslint-disable-next-line max-len
/* let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.split(' ');

advice = advice.slice(0, 8);

console.log(advice.join(' '));

// Expected return value:
// => 'Few things in life are as important as '

*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.slice(0, advice.indexOf('house'));

console.log(advice);
