import inquirer from "inquirer";
// Generate a random number between 1 and 100
const randomNum = () => {
    return Math.floor(Math.random() * 100);
};
randomNum();
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
            message: "Guess a number between 1 and 100"
        },
    ]);
    console.log(answer);
    // Compare the user's answer with the generated number
    let generatedNumber = randomNum();
    if (answer.guess === generatedNumber) {
        console.log("your answer is correct");
        break;
    }
    if (answer.guess < generatedNumber) {
        console.log("your answer is too low");
    }
    else if (answer.guess > generatedNumber) {
        console.log("your answer is too high");
        // @ts-ignore
    }
    else if (answer.guess === undefined) {
        console.log("Please enter a valid number");
    }
    console.log(`the correct answer is ${randomNum()} `);
    console.log(`You have ${maxAttemps - i - 1} attemps left`);
    i++;
}
