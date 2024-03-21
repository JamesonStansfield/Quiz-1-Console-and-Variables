const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

/*
    I used the prompt for the user to imput their tempurature.
    The fahrenheit tempurature is saved under the variable "tempPrompt"
    Then, I created the variable "tempCel" to hold the celcius tempurature
    which was converted using the math formula. Lastly, I logged the conversion
    to the console for the user to see.
*/
let tempPrompt = prompt('What is the tempurature in fahrenheit?');
let tempCel = (tempPrompt - 32) * 5 / 9
console.log("The conversion of your tempurature to Celsius is " + tempCel + ".");

//Program 2: Grade Calculator

let gradePrompt = prompt("What is Your grade? (write just the number, no percentage)");

if (gradePrompt > 90) {
    console.log('You have an A!');
}
else if(gradePrompt > 80) {
    console.log('You have a B!');
}
else if(gradePrompt > 70) {
    console.log('You have a C!');
}
else if(gradePrompt > 60) {
    console.log('You have a D!');
}
else if(gradePrompt < 60) {
    console.log('You have a F!');
}
//Program 3: Leap Year Checker


//Program 4: Largest Number Finder

let num1 = prompt('What is the first number?');
let num2 = prompt('What is the second number?');
let num3 = prompt('What is the third number?');

if (num1 > num2) {
    let largestNum = num1
}
else if (num1 > num3) {
    let largestNum = num1
}
else if (num2 > num1) {
    let largestNum = num2
}
else if (num2 > num3) {
    let largestNum = num2
}
else if (num3 > num1) {
    let largestNum = num3
}
else if (num3 > num2) {
    let largestNum = num3
}
console.log('The largest number is ' + largestNum + '.');