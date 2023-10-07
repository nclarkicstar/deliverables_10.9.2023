// Assignment:
//Write a JavaScript program that
// calculates the sum of all numbers from
// 1 to a given number n. You should use a for
// loop to accomplish this.
calculateSumResult = document.getElementById("calculateSumResult");
calculateSumNumber = document.getElementById("calculateSumNumber");

function calculateSum() {
  let n = calculateSumNumber.value;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  calculateSumResult.textContent = "Result is " + sum;
}

// Assignment:
// Write a JavaScript program that uses a
// while loop to print all even
// numbers from 1 to a given number n
printEvenResult = document.getElementById("printEvenResult");
printEvenNumber = document.getElementById("printEvenNumber");

function printEven() {
  let n = printEvenNumber.value;
  let evensArr = [];
  let i = 2;
  while (i <= n) {
    evensArr.push(i);
    console.log(i);
    i += 2;
  }
  printEvenResult.textContent = "Result is " + evensArr;
}

// Assignment:
// check voting eligibility based on age
checkVoteNumber = document.getElementById("checkVoteNumber");
checkVoteResult = document.getElementById("checkVoteResult");
container3 = document.querySelector(".container3");

function checkVotingEligibility() {
  let age = checkVoteNumber.value;
  container3.classList.remove("incorrect");
  container3.classList.remove("correct");
  if (age >= 18) {
    let checkVotingResult = "You are eligible to vote!";
    checkVoteResult.textContent = checkVotingResult;
    container3.classList.add("correct");
  } else {
    let checkVotingResult = "Sorry, you are not eligible to vote yet.";
    checkVoteResult.textContent = checkVotingResult;
    container3.classList.add("incorrect");
  }
}

// Assignment:
// button counter
// Bonus feature: custom number
multiplierInput = document.querySelector("#multiplierInput");
currentCount = document.getElementById("currentCount");
toggleChecker = 10;
counterValue = 0;

function decrementCount() {
  multiplierValue = parseInt(multiplierInput.value);
  counterValue -= multiplierValue;
  currentCount.textContent = counterValue;
}
function incrementCount() {
  multiplierValue = parseInt(multiplierInput.value);
  counterValue += multiplierValue;
  currentCount.textContent = counterValue;
}
// option to toggle the custom increments
function toggleCustom() {
  toggleChecker += 1;
  multiplierInput.classList.remove("toggleOn");
  multiplierInput.classList.remove("toggleOff");
  if (toggleChecker % 2 == 0) {
    lastValue = multiplierInput.value;
    multiplierInput.classList.add("toggleOff");
    multiplierInput.value = 1;
  } else {
    multiplierInput.classList.add("toggleOn");
    multiplierInput.value = lastValue;
  }
}

function resetCount() {
  currentCount.textContent = 0;
  counterValue = 0;
}
