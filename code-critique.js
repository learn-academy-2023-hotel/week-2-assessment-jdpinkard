// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou";
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        return i;
      }
    }
  
    return -1; // If no vowel is found in the string
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const result = findFirstVowelIndex(inputString);
  
  if (result !== -1) {
    console.log(`The index of the first vowel in the string is ${result}.`);
  } else {
    console.log("No vowels found in the string.");
  }
  
  

// Critique the code output. 

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// ChatGPT wasn't exactly right. We asked for it to log the index of the first vowel and instead it just replied with the index of the first vowel.

// Output: The index of the first vowel in the string is 1.

// To correct the code, line 14 must be replaced with:
// return inputString[i];
// It had the index of the first vowel correct, but it did not have the correct arguement and bracket notation.

// I do like it's use of includes() method. I was once faced with a similar situation, and I just used a complex if/else conditional statement to bog through if it was a or e or i or o or u. 

// If it is not following best practices, then I may have missed it. It looks like you could run any arguement inside of it. Maybe change const variable to let on InputString so that you could reassign the string it tests for future use.