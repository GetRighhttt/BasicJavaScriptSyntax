/**
 * If statements allow us to run a piece of code as long as a condition
 * is true. 
 * 
 * We also have Ternary If-statements that we can use in JavaScript also.
 */

// if (condition) {
//     console.log("Runs....");
// } else {
//     console.log("Else condition ran..");
// }

var names = "Stefan"

if (names == 'Stefan') {
    console.log('Male');
} else if (names == 'F' || names == 'FEMALE') {
    console.log('Female');
} else {
    console.log('Unkown');
}

// Ternary If Statement
var number = 101;
// if number % 2 == 0, even, if it doesn't, odd
var result = number % 2 == 0 ? 'Even' : 'Odd';
console.log(result); 


