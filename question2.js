// Scenario

// At the bustling ticket counter of the city's hottest concert venue, people are eagerly queuing up to secure tickets for the highly anticipated event. Each person in the queue has their own story and excitement levels, creating a vibrant atmosphere as they wait patiently for their turn.

// Problem Statement

// Meet Alex, a dedicated ticket seller at the venue, who is tasked with managing the queue efficiently. As people line up, Alex needs to calculate the time each individual will spend purchasing their tickets, considering their varying ticket requirements. Each person can only buy one ticket at a time and must go to the back of the queue after each purchase.

// You, as Alex's diligent assistant, are entrusted with developing an algorithm to determine the time spent for the individual at position k in the queue to finish buying tickets. This algorithm is crucial for ensuring a smooth ticketing process and keeping the concert-goers satisfied.

function calculatePurchaseTime(tickets, targetElement) {
  const numberOfPeople = tickets.length;
  let elapsedTime = 0;
  //   this creates the array from the 2 parameters
  let queue = Array.from({ length: numberOfPeople }, (_, i) => i);

  while (true) {
    // shift removes the first person from an array
    const currentPerson = queue.shift();

    if (currentPerson === targetElement) {
      // returns the time if the person in the array is the target element of that array (2nd parameter)
      return elapsedTime;
    }

    if (tickets[currentPerson] > 0) {
      // reduces ticket by 1 for person at the front of the array
      tickets[currentPerson]--;
      //   push moves the person at the beginning of the array to the end
      queue.push(currentPerson);
    }

    elapsedTime++; // Increment the time
  }
}

const ticketQuantities = [2, 4, 5];
const targetPersonPosition = 1;

const timeSpent = calculatePurchaseTime(ticketQuantities, targetPersonPosition);
console.log(targetPersonPosition, timeSpent);
