console.log("Task 1: Working with Variables");

var myNumber = 10; // Adding a variable named myNumber with a value of 10
var myString = "Hello Javascript!"; // Adding a variable named String with a value "Hello Javascript!"

console.log(myNumber);
console.log(myString); // prints out the variables myNumber and myString

console.log("Task 2: Exploring Loops");

for (var number = 0; number <= 10; number++) {
  console.log(`${number}`);
} // A for loop that has a var number that starts from 0 then add 1 until it reaches 10, and prints out the number from 0 to 10

for (var number = 1; number <= 10; number++) {
  if (number <= 5) {
    console.log(3 * `${number}`);
  } else {
    break;
  }
} // A for loop that's the same as the first one but with an 'if' statement that detects if the number is less than or equal 5 then prints the value and multiply it by 3, then breaks after 5

console.log("Task 3: Discovering Functions");

let addNumbers = function (num1, num2) {
  let result = num1 + num2;
  return result;
};
let result = addNumbers(123, 7865);
console.log(result);

// a function named addNumbers with 2 arguments, letting the result of two arguments add together then returning the result, then printing the result

let multiplyNumbers = function (num3, num4) {
  let resultM = num4 * num3;
  return resultM;
};
let resultM = multiplyNumbers(365, 144);
console.log(resultM);

// a function named multiplyNumbers with 2 arguments, letting the result of two arguments multiply together then returning the result, then printing the result
