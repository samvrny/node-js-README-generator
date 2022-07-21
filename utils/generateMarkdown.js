// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  [Installation](#Installation)<br/>
  [Usage](#Usage)<br/>
  [Liscence](#Liscence)<br/>
  [Contributing](#Contributing)</br>
  [Tests](#Tests)</br>
  [Questions](#Questions)</br>
  </br>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Liscence
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Here is my github profile: [Github](https://github.com/${data.github})<br/>
  Reach me via email with any additional questions: [${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;
