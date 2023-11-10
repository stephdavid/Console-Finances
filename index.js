// Create an array of arrays - 2 fields/columns - col1 [0] month and year - col2 [1] profit (positive number) and loss (negative number)

const financesArr = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099]
];

// Task 1: Calculate the total number of months in the data set

// Use the length property to return the number of elements in the array
let totalMonths = financesArr.length;

//Log the total number of months to the console
console.log("Financial Analysis\n==================\nTotal Months: " + totalMonths);

/* -------------- */

// Task 2: Calculate the net total amount of profit/losses 

// Declare and initialize a variable
let sum = 0;

// Use a for loop to iterate over each numerical element in the array to add (+=) all them together  
for (let i = 0; i < financesArr.length; i++) {
  sum += financesArr[i][1];
}

// Log the net total to the console
console.log("Total: $" + sum);

/* -------------- */

// Task 3: Calculate the average of the changes in the numerical elements over the entire period

// Declare and initialize a variable
let sumOfChanges = 0;

// Using a for loop, iterate through the array
for (let i = 1; i < financesArr.length; i++) {
  // For a comparison, determine the previous element by a substraction of one row and store its value in a const variable (it's not going to change)
  const previousValue = financesArr[i - 1][1];
  // Store the current value in a const variable
  const currentValue = financesArr[i][1];
  // Calculate the change amount
  const change = currentValue - previousValue;
  // Add to the value of change to the value of the sumOfChanges variable
  sumOfChanges += change;
}
// Find the average by dividing sum of changes by the length of the array
let averageChange = sumOfChanges / (financesArr.length - 1);
// Round the result to 2 decimal places 
let roundedAverageChange = averageChange.toFixed(2);

// Log the rounded average change to the console
console.log("Average Change: " + roundedAverageChange);

/* -------------- */

// Task 4: Calculate the greatest increase in Profit/Losses(date and amount) 

// Declare and initialize variables
let maxIncrease = 0;
let monthYear = "Jan-2010";

// Using a for loop, iterate through the array to get current values
for (let i = 0; i < financesArr.length; i++) {
  // Using a nested for loop, iterate through the array to get preceding values
  for (let j = i + 1; j < financesArr.length; j++) {
    // Substract the current value from the preceding value to get the value of the increase (positive or negative)
    const increase = financesArr[j][1] - financesArr[i][1];
    // In an if statement compare the increase value to the maxIncrease value
    if (increase > maxIncrease) {
      // If the statement is true, that increase becomes the maxIncrease
      maxIncrease = increase;
      // Add the value of the corresponding date
      monthYear = financesArr[j][0];
    }
  }
}
// Log the data and value of the maximum increase
console.log("Greatest Increase in Profits/Losses: " + monthYear + " ($" + maxIncrease + ")");

/* -------------- */

// Calculate the greatest decrease in Profit/Losses (date and amount)

// Declare and initialize a variable - the month and year variable has already been declared
let maxDecrease = 0;

// Using a for loop, iterate through the array to get current values
for (let i = 0; i < financesArr.length; i++) {
  // Using a nested for loop, iterate through the array to get following values
  for (let j = i + 1; j < financesArr.length; j++) {
    // Substract the current value from the following value to get the difference and store it in the decrease variable
    let decrease = financesArr[j][1] - financesArr[i][1];
    // Using a if statement compare the value of decrease with maxDescrease
    if (decrease < maxDecrease) {
      // If less than maxDecrease decrease becomes maxDecrease
      maxDecrease = decrease;
      // Determine the corresponding date
      monthYear = financesArr[j][0];
    }
  }
}
// Log the data and value of the maximum increase
console.log("Greatest Decrease in Profits/Losses: " + monthYear + " ($" + maxDecrease + ")");