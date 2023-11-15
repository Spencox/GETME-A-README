// import fs for file read/write
const fs = require('fs');

// import inquirer for terminal questions
const inquirer = require('inquirer');

// import generateMarkdown.js for helper functions
const md = require('./assets/js/generateMarkdown');
const helper = require('./assets/js/helpers');

// TODO: Create an array of questions for user input
const introQuestions = [
  // project name
  {
    type: 'input',
    message: 'What name of the project:',
    name: 'projectName',
  },   
    // github name 
  {
    type: 'input',
    message: 'What is your GitHub username:',
    name: 'githubName',
  },
  // email 
  {
    type: 'input',
    message: 'What is your email address:',
    name: 'email',
  },      
  // select parts of README to populate via command line
  {
    type: 'checkbox',
    message: 'Select sections to put in README',
    name: 'sections',
    choices: [
      new inquirer.Separator(' = Main Sections = '),
      {
        name: 'Description'
      },
      {
        name: 'Installation'
      },
      {
        name: 'Usage'
      },
      {
        name: 'Contributions'
      },
      {
        name: 'Tests'
      },
      new inquirer.Separator(' = Additional Sections = '),
      {
        name: 'Features'
      },
      {
        name: 'Badges'
      },
    ]
  }
];

const sectionQuestions = [
  // project description
  {
      type: 'input',
      message: 'Enter a description for the project:',
      name: 'Description',
  },
  // installation instructions
  {
    type: 'input',
    message: 'Enter a installation instructions for the project:',
    name: 'Installation',
  },
  // usage information
  {
    type: 'input',
    message: 'Enter a usage instructions for the project:',
    name: 'Usage',
  },
  // contribution guidelines
  {
    type: 'input',
    message: 'Define contribution guidelines for the project:',
    name: 'Contribution',
  },
  // test instructions 
  {
    type: 'input',
    message: 'Enter testing instructions:',
    name: 'Tests',
  }
  ];

function  selectedSectionQuestions(sectionsArr) {
  const selectedQuestions = helper.customReadMeQuestions(sectionsArr, sectionQuestions);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log('Inside File Write Function');
}

// TODO: Create a function to initialize app
function init() {
  
  const programTitle = `
  ____ _____ _____ __  __ _____        _         ____  _____    _    ____  __  __ _____ 
 / ___| ____|_   _|  \\/  | ____|      / \\       |  _ \\| ____|  / \\  |  _ \\|  \\/  | ____|
| |  _|  _|   | | | |\\/| |  _| _____ / _ \\ _____| |_) |  _|   / _ \\ | | | | |\\/| |  _|  
| |_| | |___  | | | |  | | |__|_____/ ___ \\_____|  _ <| |___ / ___ \\| |_| | |  | | |___ 
 \\____|_____| |_| |_|  |_|_____|   /_/   \\_\\    |_| \\_\\_____/_/   \\_\\____/|_|  |_|_____|
`;
console.log(programTitle);
  console.log(`The command line tool to quickly generate a high quality README file.
  `);
  
  inquirer.prompt(introQuestions).then((answers) => {
    //console.log(answers);
    console.log(JSON.stringify(answers, null, '  '));
    selectedSectionQuestions(answers.sections);
  });
}

// Function call to initialize app
init();
