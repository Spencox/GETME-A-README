const licenseData = require('./license-data');

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
function renderLicenseSection(license) {
  //return 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // build license badge
  console.log('MARKDOWN FUNCTION: ', data)
  console.log(renderLicenseBadge(data.License));
  console.log(renderLicenseLink(data.License));
  console.log(renderLicenseSection(data.License));

  
  
  
  //return markdown
}

module.exports = generateMarkdown;


