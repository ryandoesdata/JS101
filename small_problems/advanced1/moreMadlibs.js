function madlibs(template) {

  let adjectives = ["quick", "lazy", "stupid", "sexy", "wet"];
  let nouns = ["duck", "muffin", "crab", "basement", "job"];
  let verbs = ["run", "sweat", "cook", "work", "look"];
  let adverbs = ["happily", "merily", "sexily", "moistly"];

  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  let verb = verbs[Math.floor(Math.random() * verbs.length)];
  let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];

  let arr = template.split(' ');
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "adjective") {
      arr[i] = adjective;
      adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    }
    if (arr[i] === "noun") {
      arr[i] = noun;
      noun = nouns[Math.floor(Math.random() * noun.length)];
    }
    if (arr[i] === "verb") {
      arr[i] = verb;
      verb = verbs[Math.floor(Math.random() * verb.length)];
    }
    if (arr[i] === "adverb") {
      arr[i] = adverb;
      adverb = adverbs[Math.floor(Math.random() * adverb.length)];
    }
  }
  console.log(arr.join(" "));
}