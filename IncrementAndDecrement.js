/**
 * Increment and Decrement Operators are used to add or decrease values.
 * 
 * Increment = ++
 * 
 * Decrement = --
 * 
 * Postfix increments/decrements after the code has already ran.
 * 
 * Prefix increments/decements before the code runs. It returns the new value instantly.
 */

// Increment and Decrement Operators
var number = 0;
// Postfix
console.log("postfix")
console.log(number++) // increments number after it runs 
console.log(number)
console.log(number--) // decrements number after it runs
console.log(number)
// Prefix
console.log("prefix")
var numberTwo = 0;
console.log(++numberTwo); // increments number before running
console.log(--numberTwo); // decrements before running

console.log("for loop")
for (var i = 0; i <= 10; i++) {
    console.log(i);
}