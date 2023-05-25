/* eslint-disable max-lines-per-function */
/* understanding the problem
input: an object literal
output: strings

rules: 
the input object literal will have properties of "adjectives" "nouns" "verbs" and "adjectives"
with values for each one.

the output will be a string with random words from specifed properties put in specified places
in order to create a sentence.

Examples are provided.

data structure:
variables for each property in order to randomly choose a word out of their values

adding the values as template literals for each part of the input argument.

*/

function madlibs() {

  let words = {
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  let index = Math.floor((words.adjectives.length * Math.random()));
  let adjective = words.adjectives[index];
  let noun = words.nouns[Math.floor((5 * Math.random()))];
  let verb = words.verbs[Math.floor((5 * Math.random()))];
  let adverb = words.adverbs[Math.floor((5 * Math.random()))];

  let template =
  `The ${adjective} brown ${noun} ${adverb} +
  ${verb} the ${adjective} yellow +
  ${noun}, who ${adverb} ${verb} his +
  ${noun} and looks around.`;

  console.log(template);
}

madlibs();