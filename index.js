console.log("Task 1: Working with Variables")

var myNumber = 10 ;
var myString = "Hello Javascript!";

console.log(myNumber);
console.log(myString);

console.log("Task 2: Exploring Loops")

for (var number = 0; number <= 10; number++) {
    console.log(`${number}`)
}

for (var number = 1; number <= 10; number++) {
    if (number <= 5) {
        console.log(3 * `${number}`)
    } else {
        break;
    }
}

console.log("Task 3: Discovering Functions")

let addNumbers = function(num1, num2) {
    let result = num1 + num2;
    return result;
}
let result = addNumbers(123, 7865)
console.log(result)

let multiplyNumbers = function(num3, num4) {
    let resultM = num4 * num3
    return resultM;
}
let resultM = multiplyNumbers(365, 144)
console.log(resultM)