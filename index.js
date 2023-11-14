// import fs for file read/write
const fs = require('fs');

// import inquirer for terminal questions
const inquirer = require('inquirer');

// import generateMarkdown.js for helper functions
const md = require('./assets/js/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  // project name 
  {
        type: 'input',
        message: 'What name of the project:',
        name: 'projectName',
  },   
    // project name 
    {
      type: 'input',
      message: 'What name of the project:',
      name: 'projectName',
  },
  // project name 
  {
    type: 'input',
    message: 'What name of the project:',
    name: 'projectName',
  },      
  // project description
  {
      type: 'input',
      message: 'Enter a description for the project:',
      name: 'description',
  },
  // installation instructions
  {
    type: 'input',
    message: 'Enter a installation instructions for the project:',
    name: 'installation',
  },
  // usage information
  {
    type: 'input',
    message: 'Enter a usage instructions for the project:',
    name: 'usage',
  },
  // contribution guidelines
  {
    type: 'input',
    message: 'Define contribution guidelines for the project:',
    name: 'contribution',
  },
  // test instructions 
  {
    type: 'input',
    message: 'Enter testing instructions:',
    name: 'testing',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log('Inside File Write Function');
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    //console.log(answers);
    console.log(JSON.stringify(answers, null, '  '));
  });
}

// Function call to initialize app
init();
