let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

/* padStart adds the targetLength to the existing string first, then adds
the remainder to the left.

ie "abc".padStart(6, "123465"); // "123abc"

*/

