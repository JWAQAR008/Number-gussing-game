#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user will guess the number
// 3) compare user input with computer generate number and show result

const  randomNumber = Math.floor(Math.random() *5 + 1);

const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please guess a number between 1-5:",
    }
]);
if (answer.userGuessedNumber=== randomNumber){
    console.log("Congratulations! you gussed right number");
}else{
    console.log("Sorry! you gussed wrong number");
}
