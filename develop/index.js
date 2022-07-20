// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file. What?? 
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
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
        }
    ]);
};

// Function call to initialize app
init()
    .then(data => {
        console.log(data);
        const pageREADME = generateREADME(data);
        fs.writeFile("./README.md", pageREADME, err => {
            if(err) throw err;
            console.log(err, "CHICKEN");
        });
    });
