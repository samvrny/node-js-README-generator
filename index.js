const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown.js");

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
            message: "How would you use this application?"
        },
        {
            type: "list",
            name: "license",
            message: "What is the license for your project?",
            choices: ["Apache", "Mozilla", "MIT", "GNU"],
            default: "MIT"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who has contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How do you run the tests for this application?" 
        }, // no tests (if none) or "jest" 
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
        const pageREADME = generateREADME(data);
        fs.writeFile("./GENERATED_README.md", pageREADME, err => {
            if(err) throw err;
        });
    });
