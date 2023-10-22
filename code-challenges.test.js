// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("div3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(div3(object1.number)).toEqual(true)
        expect(div3(object2.number)).toEqual(true)
        expect(div3(object3.number)).toEqual(false)
    })
})

// Good Fail:  ReferenceError: div3 is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
// input: objects with numbers
// output: number checked if evenly divisible by 3 or not
// create a function using object as the paramentor
// create a conditional statement that evaluates whether the object.number is evenly divisble by 3 or not
// returns true or false

// const div3 = (number) => {
//     if (number % 3 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// I redid this one in the shorter form for practice.

const div3 = (number) => number % 3 === 0

console.log(div3(object1.number))





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capWords", () => {
    it('takes in an array of words and returns an array with all the words capitalized', () => {
        expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// Good Fail: ReferenceError: capWords is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function using array as parameter
// Have .map iterate through the array of strings
// Use .split("") method to make the array of strings into array of letters
// Have .map() iterate through the array letters
// Use a conditional statement to evaluate the first index [0]
// Using .toUpperCase() to capitalize it
// Use .join("") method to restore the arrays of letters back into an array of strings

const capWords = (array) => {
    return array.map((string) => {
       return string.split("").map((letter, index) => {
            if (index === 0){
                return letter.toUpperCase()
            } else {
                return letter
            }
       }).join("")
    })
}
console.log(capWords(randomNouns1))

// Had one of my friends who is a senior javascript developer look at this because I wanted a greater understanding of .filter() and I wanted to make sure it couldn't be applied. She explained .filter() can only be truth or falsey statements, and I couldn't run two different conditions like I do with the if/else conditional statement. She did however mention trying .slice() instead. This is what I came up with.

// const capWords = (array) => {
//     return array.map((string) => {
//         return string.slice(0,1).toUpperCase() + string.slice(1)
//     })
// }

// I think .slice() makes this look a lot cleaner.
