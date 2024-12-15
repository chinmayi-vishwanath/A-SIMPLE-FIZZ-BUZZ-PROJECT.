// 1. Import the 'readline' module to accept input from the terminal
const readline = require('readline');

//    2.Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//    3.Ask or prompt the user for a number input
rl.question("Enter a number: ", function(number) {

//    4 convert the input to a integer
    number = parseInt(number);  // Convert input to an integer
      
//    5.check if the input is valid number
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } 
//     6.fizz buzz logic
    else {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (number % 3 === 0) {
            console.log("Fizz");
        } 
        else if (number % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(number);
        }
    }
//  7 close the input statement after the resullt is displayed
    rl.close();
});
