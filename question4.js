// Scenario

// Sarah is an efficient event manager. She's in charge of managing the registration counter at a popular conference.

// Problem Statement

// Sarah needs a program to manage the queue of people at the registration counter. Each person is represented by a pair of integers where the first integer is the person's height and the second integer is the number of people in front of this person who have a height greater than or equal to theirs. She needs a function that can reconstruct the queue based on this information.

function reorganizeQueue(people) {
  // Custom sorting function
  const customSort = (a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  };

  // Review, not entirely sure how this for loop/while loop works.
  for (let i = 1; i < people.length; i++) {
    let j = i;
    while (j > 0 && customSort(people[j - 1], people[j]) > 0) {
      // Swap if the custom sort condition is not satisfied
      [people[j - 1], people[j]] = [people[j], people[j - 1]];
      j--;
    }
  }

  const result = [];
  // Insert each person at their k index in the result array
  for (const person of people) {
    // splice removes, replaces, or adds elements in an array
    result.splice(person[1], 0, person);
  }

  return result;
}
