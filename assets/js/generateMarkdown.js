const licenseData = require('./license-data');
const helper = require('./helpers');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenseData.licenseBadgeData[license][0]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseData.licenseBadgeData[license][1]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseBadge, licenseLink) {
  return `[![License](${licenseBadge})](${licenseLink})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // build license badge
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseLink = renderLicenseLink(data.License);
  const licenseSection = renderLicenseSection(licenseBadge, licenseLink);

  const tableOfContents = helper.makeTOC(data);
  const neatTOC = tableOfContents.trim().replace(/\n\s*\n/g, '\n');
  
  const markdown = 
  `
# ${data.projectName}
${licenseSection ? `${licenseSection}`:''}
${data.Description ? `## Description
${data.Description}`:''}
${tableOfContents ? `## Table of Contents
${neatTOC}`:''}
${data.Installation ? `## Installation
${data.Installation}`:''}
${data.Usage ? `## Usage
${data.Usage}`:''}
${data.Contributions ? `## Contributions
${data.Contributions}`:''}
${data.Tests ? `## Tests
${data.Tests}`:''}
${data.Features ? `## Features
${data.Features}`:''}
${data.Badges ? `## Badges
${data.Badges}`:''}
${data.Credits ? `## Credits
${data.Credits}`:''}
## License
This app is licensed under the ${data.License} license. Information on the license can be found online at ${licenseLink} or by clicking the badge above.
## Questions
GitHub Repo: https://github.com/${data.githubName}/${data.projectName}  
Email: ${data.email}
`;
  const neatMarkdown = markdown.trim().replace(/\n\s*\n/g, '\n');

  return neatMarkdown
}

module.exports = generateMarkdown;
