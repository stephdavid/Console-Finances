# Console-Finances

## Module 4 Challenge - JavaScript: Console Finances
1. When I first looked at the requirements ReadMe file, in  reference to the financial 
   dataset in the starter/index.js file, I was intrigued by the term "arrays with two fields".

   Was this an array of arrays? 

   I googled "arrays with two fields" and the first webpage I landed on was this - 
   JavaScript2D Array - Two Dimensional Arrays in JS. On the heading image was a indicator 
   that it was array of arrays that we're talking about. The introduction read: 

        "In JavaScript programming, we are all used to creating and working with   
         one-dimensional arrays. These are arrays that contain elements (elements of
         similar data types or multiple data types).

        "But it’s also good to know that two-dimensional arrays (2D arrays)
        exist in JS.

        "In this article, you will learn what two-dimensional arrays are 
        and how they work in JavaScript. It is quite different from
        other programming languages because, technically, there is no
        two-dimensional array in JavaScript."

   ...no two-dimensional array in JavaScript!

   Huh?

   But then there follows some clarification:

        "In JavaScript, there is no direct syntax for creating 2D arrays
        as with other commonly used programming languages like C, C++, and Java.
        "You can create two-dimensional arrays in JavaScript through jagged arrays —
        an array of arrays."

   I may have learned the syntax with other languages, but it escapes me now. So, I don't need to unlearn things to deal with JavaScript's way of doing it. :-)

   What was particularly useful in this article is the instruction on accessing an array of arrays: 

        "You can access the elements of a two-dimensional array using       
        two indices, one for the row and one for the column."

   And so, as I first guessed, "array with two fields" is an "array of arrays". 
   
---

2. VSCode (ESLint to be specific) is such a nag! In the index.html head section, why is the X-UA-Compatible meta element not needed? I found a Stack Overflow question/answer on it - https://stackoverflow.com/questions/26346917/why-use-x-ua-compatible-ie-edge-anymore. Blah blah blah - something to do with Internet Explorer which is no longer supported - hurrah! So, I removed it.
     ![VSCode nag message ](vscode-nag.png)

---

3. Then, in **index.js** the array of arrays/fields has already been added and initialized/populated. I changed the variable name from **finances** to **financesArr** to make things clearer. Also, as the array itself will not change, I changed the type of array of array from var to const as per the following:

   From https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/ :
   * var and let create variables that can be reassigned another value.
   * const creates "constant" variables that cannot be reassigned another value.
   * developers shouldn't use var anymore. They should use let or const instead.
   * if you're not going to change the value of a variable, it is good practice to use const.

---

4. ** ```text ** I didn't include this in the console log text, as it looks like an instruction

   The *housekeeping* out of the way, I turned to the analysis and requested calculations:

---

5. * The total number of months included in the dataset
        * I used the array's length property to get this and logged the total to the console. To use the console log in JavaScript, call the console. log() method, followed by the object or message to be logged.

---

6. * The net total amount of Profit/Losses over the entire period.
        * I used a **for loop** control flow statement to interate over each item in the array, with the **addition assignment operator += ** to perform a numeric addition (it can also perform string concatenation) on each element in the second column = [1] - of the array (n.b. the numbering of arrays begins with 0) to get the sum and log that result to the console.

---

7. * The average of the **changes** in Profit/Losses over the entire period.
        * I used a **for loop** to iterate over the elements. Starting from the second row, each numerical value in the array column was subtracted from its predecessor to obtain the change amount. All of these amounts were added to the sum. The average was calculated by dividing sum of changes by the length of the array and that result was rounded to 2 places using the toFixed(x) function.  **toFixed(x)** is an inbuilt function which is used to round off a decimal number to specific decimal places. The rounded average change is then logged to the console.

---

8. * The greatest increase in Profit/Losses (date and amount) over the entire period.
        * I used a **for loop** to iterate through the array to access current row date and number elements - as the second row is the first changed row, I started the count at 1. I used a **nested for loop** to get the values of the immediately preceeding row and started the count at 1 -1 (or 0). I then subtracted the preceeding number from the current number to get the difference, and stored that in the variable increase. Using an if statement, I compared that value with the value of the maxIncrease variable. If greater (a larger number), then that amount became the value of maxIncrease. Then the corresponding date was determined. And that date that corresponded with the amount of the maxIncrease was logged to the console. 

---

9. * The greatest decrease in Profit/Losses (date and amount) over the entire period.
        * I used a **for loop** to iterate through the array to access current row date and number elements - as the second row is the first changed row, I started the count at 1. I used a **nested for loop** to get the values of the immediately preceeding row and started the count at 1 -1 (or 0). I then subtracted the preceeding number from the current number to get the difference, and stored that in the variable decrease. Using an if statement, I compared that value with the value of the maxDecrease variable. If less (a smaller number), then that amount became the value of maxDecrease. Then the corresponding date was determined. And that date that corresponded with the amount of the maxDecrease was logged to the console. 

---

10. Here's a screenshot of index.html showing the console and financial analysis.

![Screenshot ](screenshot.png)

---

1.  References used include:
     
    JavaScript 2D Array – Two Dimensional Arrays in JS - Joel Olawanle, Free Code Camp
    https://www.freecodecamp.org/news/javascript-2d-arrays/


    JavaScript Arrays - W3 Schools
    https://www.w3schools.com/js/js_arrays.asp


    How can I create a two-dimensional array in JavaScript? Matthew C., SENTRY
    https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/


    JavaScript Multidimensional Array JavaScript Tutorial https://www.javascripttutorial.net/javascript-multidimensional-array/


    JS Sum of an Array – How to Add the Numbers in a JavaScript Array Dionysia Lemonaki https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/


    Finding out how to find out the Profit/Losses average of change in this array StackOverflow https://stackoverflow.com/questions/74884927/finding-out-how-to-find-out-the-profit-losses-average-of-change-in-this-array

    
    JavaScript round a number to two decimal places (with examples) https://codedamn.com/news/javascript/ CodeDamn javascript-round-a-number-to-2-decimal-places-with-examples


    Chat GPT https://chat.openai.com/c/432c8d15-16ca-434a-9df6-62c9cc3d6546
