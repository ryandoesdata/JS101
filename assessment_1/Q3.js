/*
Examine the following code carefully. How many variables are in the global scope, 
and how many are local to the louder function scope? Make sure you name each variable explicitly.
*/

function louder(spark, bee) {
  let sparkCopy = spark;

  for (let i = 0; i < 2; i += 1) {
    let upper = sparkCopy.toUpperCase();
    spark += upper;
  }

  return spark;
}

let origin = {
  spark: "tinder",
  bee: "bumble",
};

origin = louder(origin.spark);
console.log(origin);

/*
Takeaways:
> Reassigned variables count twice, or for each reassignment?
> increment is a variable! As is the reassigned spark variable on line 11.