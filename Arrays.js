/**
 * Arrays are a way of storing multiple values of the same type.
 * 
 * The values are easily accessible.
 * 
 * However, it is difficult to add elements to an array without changing the size
 * of that array. 
 * 
 * In some languages, you have to manually change the size.
 * 
 * We manipulate arrays using the subscript operator [] as their index.
 */

// Declaring multiple arrays
var numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var unknownNames = ["Stefan", "Bayne", "Ayesha", "Mom", "Dad"]

// prints the first element in the array. Indexes start at 0
console.log(numbersList[0])
console.log(numbersList[4]) // 5th
console.log(numbersList[8]) // 9th

// We can use a for loop to iterate through numbers in the array
console.log("----------------------")
console.log("Here is where we print the index of numbers in the array.")
for(numbers in numbersList) {
    console.log(numbers)
}



