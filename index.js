#! /usr/bin/env node
import inquirer from "inquirer";
// Generate a random number between 1 and 100
randomNum();
const randomNum = Math.floor(Math.random() * 20 + 1);
// let randomNum = 7
// Get a random number from user
let i = 0;
let maxAttemps = 3;
while (i < maxAttemps) {
    // @ts-ignore
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "user",
            message: "Enter your name",
            validate: (input) => {
                if (input.length < 3) {
                    console.log("Name should have a minimum length of 3 characters");
                }
                return input.length >= 3;
            },
        },
        {
            type: "number",
            name: "guess",
            message: "Guess a number between 1 and 20:",
            validate: (input) => {
                const num = parseInt(input);
                if (input === undefined || num < 1 || num > 20) {
                    console.log("Please enter a valid number between 1 and 20");
                    return false;
                }
                return true;
            }
        },
    ]);
    console.log(answer);
    // Compare the user's answer with the generated number
    // let generatedNumber = randomNum();
    if (answer.guess === randomNum) {
        console.log("your answer is correct");
        break;
    }
    else if (answer.guess < randomNum) {
        console.log("your answer is too low");
    }
    else if (answer.guess > randomNum) {
        console.log("your answer is too high");
        // @ts-ignore
    }
    console.log(`the correct answer is ${randomNum}`);
    console.log(`You have ${maxAttemps - i - 1} attemps left`);
    i++;
}
