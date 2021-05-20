// DEPENDENCIES
const inquirer = require("inquirer");

// VARIABLES
const questions = [
    // General employee questions
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
    },
];

// Loop question
const loopQ = [
    {
      type: 'confirm',
      name: 'addEmployee',
      message: 'Do you want to add another employee?',
    }
]

class Inquire {
    constructor() {

    }

    doMethod() {

    }
}

module.exports = Inquire;