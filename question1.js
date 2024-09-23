// Scenario

// Samantha, a software developer, is working on a text-processing module for a new application. The module she's developing involves parsing strings that consist solely of various types of brackets, including (), {}, and []. She needs to ensure that these strings are valid in terms of bracket usage according to a set of rules.

// Problem Statement

// Samantha needs to determine the validity of an input string s which comprises solely of the characters (, ), {, }, [, and ]. The software must verify the following conditions:

// The opening brackets must be correctly matched with the corresponding closing brackets of the same type.
// The brackets must be closed in the correct order.
// Each closing bracket should have a corresponding opening bracket of the same type.
// Given the nature of her application, ensuring that the bracket usage adheres to these conditions is critical for accurate text processing.

// Stack uses push and pop

function isBracketValid(bracket) {
  const currentArray = [];
  const startingSymbols = ["(", "{", "["];
  const endingSymbols = [")", "}", "]"];

  //   loops through array
  for (let i = 0; i < bracket.length; i++) {
    const currentChar = bracket[i];

    if (startingSymbols.includes(currentChar)) {
      // push pushes to end of an array
      currentArray.push(currentChar);
    } else if (endingSymbols.includes(currentChar)) {
      const matchingStartingSymbol =
        startingSymbols[endingSymbols.indexOf(currentChar)];

      //   if currentArray has no items or the end symbol does not match the starting symbol, return false
      if (
        currentArray.length === 0 ||
        currentArray.pop() !== matchingStartingSymbol
      ) {
        return false;
      }
    }
  }

  return currentArray.length === 0;
}

// Example usage:
const bracket1 = "[]";
console.log(isBracketValid(bracket1)); // Output: true

const bracket2 = "(]}";
console.log(isBracketValid(bracket2)); // Output: false
