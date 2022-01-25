// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },

    {
        type: 'input',
        name: 'first_name',
        message: "whats your first name"
    },
    {
        type: 'list',
        name: 'license',
        message: 'select a license',
        choices: ['Apache', 'mit', 'boost', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',

    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',

    },

    {
        type: 'input',
        name: 'questions',
        message: 'What kind of questions to you want to add?',

    },

]
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('readme.md', data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        console.log(generateMarkdown(answers));
        writeToFile(generateMarkdown(answers));
    });
}
// Title description table of contents Installlation test questions, usage information, License
init();