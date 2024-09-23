// Scenario

// John is a teacher at Samson Kid's School. In his class, students are standing in a line, and their heights are recorded. The heights of students are listed in the order they appear from left to right.

// Problem Statement

// John intends to rearrange the students so that they are standing in non-decreasing order by their heights. However, when the students are rearranged, some may end up in different positions compared to their original positions.

// He is tasked with implementing a function, heightChecker(heights), which calculates the minimum number of students who are not standing in the correct positions after the rearrangement. The function should return this minimum count.

function checkOrderOfStudentHeight(studentHeights) {
  let sortedHeightsCopy = [];
  //   setting to 0 helps initialize the count variable
  let countOfDifferences = 0;

  // This for loop creates a copy of the studentHeights array
  for (let i = 0; i < studentHeights.length; i++) {
    sortedHeightsCopy.push(studentHeights[i]);
  }

  // the for-for-if creates a bubble sort for the student heights
  for (let i = 0; i < studentHeights.length - 1; i++) {
    for (let j = 0; j < studentHeights.length - i - 1; j++) {
      if (studentHeights[j] > studentHeights[j + 1]) {
        // triggers the heights to swap if out of order
        let temp = studentHeights[j];
        studentHeights[j] = studentHeights[j + 1];
        studentHeights[j + 1] = temp;
      }
    }
  }

  // Compares the two arrays and counts the differences
  for (let i = 0; i < studentHeights.length; i++) {
    if (studentHeights[i] !== sortedHeightsCopy[i]) {
      countOfDifferences++;
    }
  }

  return countOfDifferences;
}

let studentHeights = [1, 2, 4, 2, 4, 1, 3, 1];
let result = checkOrderOfStudentHeight(studentHeights);
console.log(result);
