function greeting(name, job) {
  
  let nameArray = name.split(' ');
  let firstName = nameArray[0];
  let lastName = nameArray[1];

  let jobArray = job.split(' ');
  let titleKey = jobArray[0];
  let occupationValue = jobArray[1];
  const jobject = { 
    title: titleKey, 
    occupation: occupationValue 
  };
  
  console.log(`Hello, ${firstName} ${lastName}! Nice to have a ${jobject.title} ${jobject.occupation} 
around.`);
};

greeting("Bill Nye", "Master Plumber");
