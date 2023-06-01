const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}
console.log(" ");
console.log("    __  ___       __    __ TM");
console.log("    ||  |  |      ||   |  |");
console.log(" _  ||  |  |   _  ||   |__|");
console.log("||  ||  |  |  ||  ||   |  |");
console.log(" \\__||  |__|   \\__||   |  |");
console.log(" ");

prompt('Welcome to the Joja Human Emotion Barometer! What is your name?');

let name = readline.question();
let greeting;
let num = Math.random();
if (num < 1 && num >= .9) {
  greeting =
  `Hi ${name}! Nice to meet you. 
  May I ask what your pronouns are?`;
} else if (num < .9 && num >= .8) {
  greeting = `Shit dawg, sup?
  What's your pronouns, ${name}?`;
} else if (num < .8 && num >= .7) {
  greeting = `Howdy ${name}. What're your pronouns, lil cowpoke?`;
} else if (num < .7 && num >= .6) {
  greeting = `Oh, hi ${name}! I didn't recognize you without your cool rhinestone thong. 
  Did you get that foot cream for grandma? 
  Oh. I see. Sorry for your loss.
  Well, um, what are your pronouns?`;
} else if (num < .6 && num >= .5) {
  greeting = `Oh great, it's ${name}. Whatever..what are your pronouns?`;
} else if (num < .5 && num >= .4) {
  greeting = `I'm not getting paid enough for this. What are your pronouns?`;
} else if (num < .4 && num >= .3) {
  greeting = `Hi ${name}! I'm so glad you're here. I love humans.
  especially emotionall damaged ones! :)
  What are your pronouns?`;
} else if (num < .3 && num >= .2) {
  greeting = `Holy shit balls.
  ${name}.
  Wow.
  Oh my god.
  What are your pronouns?`;
} else if (num < .2 && num >= .1) {
  greeting = `Hi , ${name}. This is a safe space.
  May I ask what your pronouns are?`;
} else {
  greeting = `${name}...that's a nice name. 
  What are your pronouns, ${name}?`;
}

prompt(greeting);

let pronouns = readline.question();

prompt(`${pronouns}...cool! So, ${name}, what's your inner weather today?
Choose from 1) Stormy 2) Cloudy 3) Sunny 4) Clear`);

let weather = readline.question();

switch (weather) {
  case '1':
    console.log('Batten down the hatches!!!!');
    break;
  case '2':
    console.log('Meh');
    break;
  case '3':
    console.log("Let's frolic outside!");
    break;
  case '4':
    console.log("Ahh, moments of clarity :)");
}