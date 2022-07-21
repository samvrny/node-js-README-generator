// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
//const questions = []; COULD BE that each question is written, and then the NAME part of the input questions
//is just a numbered index (i.e. name: 1, 2, 3, etc.)

// TODO: Create a function to write README file. What?? 
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function promptQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please give a detailed description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What are your installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project intended to be used for?"
        },
        // {
        //     type: "input",
        //     name: "license",
        //     message: "What is the license for your project?"
        // },
        {
            type: "input",
            name: "contributing",
            message: "Who has contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "SAMPLE TEST QUESTION (ask tutor what to put in here)"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your github username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        }
    ]);
};

// Function call to initialize app
promptQuestions()
    .then(data => {
        console.log(data);
        const pageREADME = generateREADME(data);
        fs.writeFile("./README.md", pageREADME, err => {
            if(err) throw err;
            console.log(err, "CHICKEN");
        });
    });
