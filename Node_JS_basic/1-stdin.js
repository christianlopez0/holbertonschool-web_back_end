// 1-stdin.js

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Capture the user input
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Close the interface after the input
});

// Handle the close event
rl.on('close', () => {
    console.log("This important software is now closing");
});
