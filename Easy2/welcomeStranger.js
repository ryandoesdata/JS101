function greeting(name, job) {

  let nameString = name.join(' ');
  
  return `Hello, ${nameString}! Nice to have a ${job.title} ${job.occupation}
around.`;
};

console.log(greeting(["Ryan", "Alexander", "Foley"], { title: "Virtuoso", occupation: "Violinist" }));
