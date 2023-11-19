// import fs for file read/write
const fs = require('fs');

// import inquirer for terminal questions
const inquirer = require('inquirer');

// import generateMarkdown.js for helper functions
const helper = require('./assets/js/helpers');
const license = require('./assets/js/license-data');
const generateMarkdown = require('./assets/js/generateMarkdown');

// introductory questions for users
const introQuestions = [
  // project name
  {
    type: 'input',
    message: 'What name of the project:',
    name: 'projectName',
    validate(answer) {
      if (answer.length < 1) {
        return 'Must enter a project name';
      }
      return true;
    }
  },   
    // github username 
  {
    type: 'input',
    message: 'What is your GitHub username:',
    name: 'githubName',
    validate(answer) {
      if (answer.length < 1) {
        return 'Must enter a GitHub username';
      }
      return true;
    }
  },
  // email 
  {
    type: 'input',
    message: 'What is your email address:',
    name: 'email',
    validate: function (email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) // cited in README
      if (valid) {
          return true;
      } else {
          return "Please enter a valid email";
      }
    }
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
      {
        name: 'Credits'
      }
    ],
    validate(answer) {
      if (answer.length < 1) {
        return 'Must choose at least one section';
      }
      return true;
    },
  }
];

// enter details for each README selection  
const sectionQuestions = [
  // project description
  {
      type: 'input',
      message: 'Enter a description for the project:',
      name: 'Description',
      default: undefined,
      filter: (input) => (input === '' ? license.sectionDefaults['Description'] : input)
  },
  // installation instructions
  {
    type: 'input',
    message: 'Enter a installation instructions for the project:',
    name: 'Installation',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Installation'] : input)
  },
  // usage information
  {
    type: 'input',
    message: 'Enter a usage instructions for the project:',
    name: 'Usage',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Usage'] : input)
  },
  // contribution guidelines
  {
    type: 'input',
    message: 'Define contribution guidelines for the project:',
    name: 'Contributions',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Contributions'] : input)
  },
  // test instructions 
  {
    type: 'input',
    message: 'Enter testing instructions:',
    name: 'Tests',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Tests'] : input)
  },
  // features  
  {
    type: 'input',
    message: 'Enter details on project features:',
    name: 'Features',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Features'] : input)
  },
  // badges 
  {
    type: 'input',
    message: 'Enter any badges data:',
    name: 'Badges',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Badges'] : input)
  },
  // credits 
  {
    type: 'input',
    message: 'Enter credits and citations:',
    name: 'Credits',
    default: undefined,
    filter: (input) => (input === '' ? license.sectionDefaults['Credits'] : input)
  }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
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
  // get basic user data Project Name, GitHub Username, Email
  inquirer.prompt(introQuestions).then((introAnswers) => {
    const userSections = helper.customReadMeQuestions(introAnswers.sections, sectionQuestions);
    // Allow user to pick what sections to fill in
    inquirer.prompt(userSections).then((sectionAnswers) => {
      // select a license organization
      inquirer.prompt([
        {
          type: 'list',
          name: 'organization',
          message: 'Select an organization:',
          choices: Object.keys(license.licenseOptions),
        }
      ]).then((organizationAnswer) => {
        const selectedOrganization = organizationAnswer.organization;
          
        // select a license type
        inquirer.prompt([
          {
            type: 'list',
            name: 'License',
            message: `Select a license for ${selectedOrganization}:`,
            choices: license.licenseOptions[selectedOrganization],
          } 
        ]).then((licenseType) => {
          const allUserAnswers = {...introAnswers, ...sectionAnswers,...licenseType}
          // generate markdown content
          const customREADME = generateMarkdown(allUserAnswers);
          writeToFile('README.md', customREADME)
        })
      })
    });
  });
}

// Function call to initialize app
init();



