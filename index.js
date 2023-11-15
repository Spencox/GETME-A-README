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
    name: 'Contributions',
  },
  // test instructions 
  {
    type: 'input',
    message: 'Enter testing instructions:',
    name: 'Tests',
  }
  ];

  // comprehensive list of licenses 
  const licenses = {
    'Apache': ['Apache License 2.0'],
    'Boost': ['Boost Software License 1.0'],
    'BSD': ['BSD 3-Clause License', 'BSD 2-Clause License'],
    'Creative Commons': ['CC0', 'CC BY 4.0', 'CC BY-SA 4.0', 'CC BY-NC 4.0', 'CC BY-ND 4.0', 'CC BY-NC-SA 4.0', 'CC BY-NC-ND 4.0'],
    'Eclipse': ['Eclipse Public License 1.0'],
    'GNU': ['GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3'],
    'The Organization for Ethical Source': ['The Hippocratic License 2.1', 'The Hippocratic License 3.0'],
    'IBM': ['IBM Public License Version 1.0'],
    'ISC': ['ISC License (ISC)'],
    'None': ['None'],
    'MIT': ['The MIT License'],
    'Mozilla': ['Mozilla Public License 2.0'],
    'Open Data Commons': ['Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)'],
    'Perl': ['The Perl License', 'The Artistic License 2.0'],
    'SIL': ['SIL Open Font License 1.1'],
    'Unlicense': ['The Unlicense'],
    'WTFPL': ['The Do What the Fuck You Want to Public License'],
    'Zlib': ['The zlib/libpng License']
  };
  

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
  
  inquirer.prompt(introQuestions).then((introAnswers) => {
    // get basic user data Project Name, GitHub Username, Email
    const userSections = helper.customReadMeQuestions(introAnswers.sections, sectionQuestions);
    console.log('User Sections' , userSections);
    // Allow user to pick what sections to fill in
    inquirer.prompt(userSections).then((sectionAnswers) => {
      console.log(sectionAnswers);
    });
    // select a license
    inquirer.prompt
  });
  
}

// Function call to initialize app
init();



