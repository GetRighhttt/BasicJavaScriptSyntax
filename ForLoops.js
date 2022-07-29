/**
 * For loops in JavaScript are essentially the same as 
 * most dynamically typed languages.
 * 
 * We will show some examples below.
 * 
 * We also have other ways of looping with for loops like the 'for of'
 * function.
 * 
 * 3 ways example - 'for i', 'for of', 'for each'
 * 
 * There's also more, but these 3 are the most common.
 */

var names = ["Stefan", "Ayesha", "Vince", "Bob"]

// 'for i' for loop example looping through the array
for(var i = 0; i < names.length; i++) {
    console.log("Printing the index with it's name: " + i + " " + names[i])
}

console.log()
// 'for of' for loop example
for(const name of names) {
    console.log(name)
}

console.log()
// 'for each' for loop example
names.forEach(function(name) {
    console.log(name)
})
