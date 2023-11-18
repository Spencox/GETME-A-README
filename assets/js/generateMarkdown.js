const licenseData = require('./license-data');
const _ = require('lodash');

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
  console.log('MARKDOWN FUNCTION: ', data)
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseLink = renderLicenseLink(data.License);
  const licenseSection = renderLicenseSection(licenseBadge, licenseLink);

  const markdown = 
  `
  # ${data.projectName}
  ${licenseSection ? `${licenseSection}`:''}
  ${data.Description ? '## Description':''}
  ${data.Installation ? '## Installation':''}
  ${data.Usage ? '## Usage':''}
  ${data.Contributions ? '## Contributions':''}
  ${data.Tests ? '## Tests':''}
  ${data.Features ? '## Features':''}
  ${data.Badges ? '## Badges':''}
  ## License
  `
  const neatMarkdown = _.trim(markdown).replace(/\n\s*\n/g, '\n');

  return neatMarkdown
}

module.exports = generateMarkdown;
