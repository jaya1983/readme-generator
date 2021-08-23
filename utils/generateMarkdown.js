// TODO: Create a function that returns a license badge based on which license is passed in

const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License: MIT](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

   if (license !== "None") {
    return `
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`;
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {

  const install = `## Installation 💻`;
  const usageInfo = `## Usage`;
  const licenseInfo = `## License`;
  const contributorInfo = `## Contributors`;
  const testInstructions = `## Tests`;
  const questionInfo = `## Questions`;

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Github URL 🌐
[${data.github}](https://github.com/${data.github}/)
## Description 📝
${data.description}
  
## Table of Contents 🗒
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

${install} \n

To Install dependencies run these commands \n
${data.dependencies}

${usageInfo}\n

To begin the question prompts, in the driectory containing this project, from the command line run node index.js.\n Answer all of the following questions, when complete the README.md file will be generated in the current directory.

${licenseInfo}\n

${renderLicenseSection(data.license)}

${contributorInfo} \n 

${data.contributors}

${testInstructions}\n

${data.test}

${questionInfo}\n
For questions about this project, please see my GitHub at [${data.github}](https://github.com/${data.github})  (Or) \n
Contact me at ${data.email}.
`;
}



module.exports = generateMarkdown;
