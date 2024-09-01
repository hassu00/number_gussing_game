#! /usr/bin/env node
import inquirer from "inquirer";
let maxAttempts = 3;
let i = 0;
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
        type: "list",
        name: "stages",
        message: "Choose your stage",
        choices: ["Easy", "Medium", "Hard", "impossible"],
    },
]);
// Generate a random number between 1 and 100
let randomNum;
// @ts-ignore
let maxNum;
switch (answer.stages) {
    case "Easy":
        maxNum = 10;
        break;
    case "Medium":
        maxNum = 20;
        break;
    case "Hard":
        maxNum = 50;
        break;
    case "impossible":
        maxNum = 100;
        break;
}
console.log(answer.stages); // print the chosen stage
while (i < maxAttempts) {
    // @ts-ignore
    randomNum = Math.floor(Math.random() * maxNum + 1);
    // @ts-ignore
    const guessAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "guess",
            message: `Guess a number from 1 to ${maxNum}:`,
            validate: (input) => {
                const num = parseInt(input);
                //   @ts-ignore
                if (input === undefined || num < 1 || num > maxNum) {
                    // @ts-ignore
                    console.log(`Please enter a valid number between 1 and ${maxNum}`);
                    return false;
                }
                return true;
            },
        },
    ]);
    // Compare the user's answer with the generated number
    // let generatedNumber = randomNum();
    if (guessAnswer.guess === randomNum) {
        console.log("your answer is correct");
        break;
    }
    else if (guessAnswer.guess < randomNum) {
        console.log("your answer is too low");
    }
    else if (guessAnswer.guess > randomNum) {
        console.log("your answer is too high");
        // @ts-ignore
    }
    console.log(`the correct answer is ${randomNum}`);
    console.log(`You have ${maxAttempts - i - 1} attempts left`);
    i++;
}
