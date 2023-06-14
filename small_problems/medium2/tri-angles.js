/* understand the problem
input: three numbers
output: one of four strings

rules: the sum of the three numbers must equal 180
no number can be 0
if one angle equals 90, output is "right"
if all angles are less than 90, output is "acute"
if one angle is greater than 90, output is "obtuse"
*/

function triangle(angleOne, angleTwo, angleThree) {
  let arr = [angleOne, angleTwo, angleThree];
  
  if ((angleOne + angleTwo + angleThree !== 180) || 
       !arr.every(ele => ele !== 0)) {
    return "invalid";
  } else if (arr.find(ele => ele === 90) === 90) {
    return "right";
  } else if (arr.every(ele => ele < 90)) {
    return "acute";
  } else {
    return "obtuse";
  }

}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(angleOne, angleTwo, angleThree) {
  let arr = [angleOne, angleTwo, angleThree];

  if (((angleOne + angleTwo + angleThree) !== 180) || !arr.every(ele => ele !== 0)) {
    console.log("invalid");  
  } else if  (arr.filter(num => num === 90).length === 1) {
    console.log("right");
  } else if ((arr.filter(num => num >= 90).length === 0)) {
    console.log("acute");
  } else {
    console.log("obtuse");
  }

}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"