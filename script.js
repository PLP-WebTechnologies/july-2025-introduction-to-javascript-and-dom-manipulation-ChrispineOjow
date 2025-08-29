// script.js

// Part 1: Variable declarations and conditionals
let userName = "John Doe";
let userAge = 25;

if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

// Part 2: Custom functions
function greetUser(name) {
    return "Hello, " + name + "!";
}

function calculateSquare(number) {
    return number * number;
}

// Part 3: Loop examples
// Example 1: For loop
for (let i = 0; i < 5; i++) {
    console.log("This is loop iteration number: " + i);
}

// Example 2: While loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Part 4: DOM interactions
// 1. Change the text of an element with id 'greeting'
document.getElementById('greeting').innerText = greetUser(userName);

// 2. Create a new paragraph and append it to the body
let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a new paragraph added to the document.";
document.body.appendChild(newParagraph);

// 3. Remove an element with id 'removeMe' from the DOM
let elementToRemove = document.getElementById('removeMe');
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}