// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
console.log(cohort.split(" "))

// a) Your answer: I'd assume ['Hotel', '2023']
// b) Verify and explain: Yes, it worked. .split() just turned it into an array and then into two seperate elements.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:'Hello, LEARN Student'
// b) Verify and explain: I was wrong. Didn't realize it didn't have a return. Functions ALWAYS need a return unless it's written in the short form. No return = Undefined

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Truthfully, I half expected it to fail since I was wrong on the last one. It works because .filter() method is looking for an array and it iterates each element(number) against the condition to see if it is odd.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Objects use dot notation to call the keys it contains. The bracket notation of 0 index calls on the first element in the array the key holds.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It calls on the entire class. [ "George", "Hotel", 2023]
// b) Verify and explain: I was kind of right... learnStudent calls () the Learn class using the argument "George" to fill the paramenter in the constructor() method. It will then output the class including it's keys and key values.
