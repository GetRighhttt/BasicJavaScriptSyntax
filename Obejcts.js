/*
An Object is a collection of properties. 
Each property has a value.
*/

// Below we will create a person object with an address object also
// objects save information in key-value pairs example: firstname - key
// "Stefan" - value
var person = {
    firstName: "Stefan",
    lastName: "Bayne",
    age: 27,
    sex: "Male",
    ethnicity: "African-American",
    dob: new Date(1995, 0, 6).toJSON(), // allows us to print the date
    address: {
        city: "Tampa",
        zipcode: "33544"
    }
}

// we can print the values using person and dot notation
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.sex)
console.log(person.ethnicity)
console.log(person.address)

// here is how we access nested objects
console.log("This will print Stefan's zipcode: " + person.address.zipcode)

// this will print the list of all the values for the object 
console.log(Object.values(person))

// this will print the list of all the keys for the object
console.log(Object.keys(person))

// prints both in double lines
console.log(Object.values(person) + " " + Object.keys(person))

// prints a string representation of an object
// strigify is used as a builtin JavaScript method
console.log(JSON.stringify(person))
