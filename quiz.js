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

let year = prompt('What is the year?');
let leapYear = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) { 
            leapYear = true;
        }
    } else {
        leapYear = true;
    }
} 
if (leapYear) {
    console.log(year + ' is a leap year!');
} else {
    console.log(year + ' is not a leap year.');
}


//Program 4: Largest Number Finder

let num1 = prompt('What is the first number?');
let num2 = prompt('What is the second number?');
let num3 = prompt('What is the third number?');
let largestNum = num1;

if (num2 > largestNum) {
    largestNum = num2;
}
if (num3 > largestNum) {
    largestNum = num3;
}
console.log('The largest number is ' + largestNum + '.');