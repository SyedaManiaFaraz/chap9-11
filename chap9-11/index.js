// QUESTION NO 01
var city = prompt("Enter the name of your city:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to " + city + "!");
}


// QUESTION NO 02
var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir!");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am!");
} else {
    alert("Good Morning!");
}


// QUESTION NO 03
let signalColor = prompt("Enter the color of the road traffic signal (red/yellow/green):");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color entered. Please enter red, yellow, or green.");
}


// QUESTION NO 4
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Your fuel level is sufficient.");
}


// QUESTION NO 05
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}


// QUESTION N0 06
let marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
let marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
let marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

let totalMarks = parseFloat(prompt("Enter total marks:"));

let marksObtained = marks1 + marks2 + marks3;
let percentage = (marksObtained / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Satisfactory";
} else {
    grade = "F";
    remarks = "Fail";
}

document.write("<h1>Marksheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


// QUESTION NO 07
let secretNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again! The correct number was " + secretNumber);
}


// QUSTION NO 08
let num = parseInt(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert("The number " + num + " is divisible by 3.");
} else {
    alert("The number " + num + " is not divisible by 3.");
}

// QUESTION NO 9
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("The number " + number + " is even.");
} else {
    alert("The number " + number + " is odd.");
}


// QUESTION NO 10
let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold outside!");
}


// QUESTION NO 11
let firstNumber = parseFloat(prompt("Enter the first number:"));

let secondNumber = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") 
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    }