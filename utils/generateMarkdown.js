//this function generates the license badge
function renderLicenseBadge(data) {
  if(!data.license) {
    return ""
  } else {
    return `![](https://img.shields.io/badge/license-${data.license}-green)`
  }
}

//this function generates the link to the license
function renderLicenseLink(data) {
  if(!data.license) {
    return ""
  } else if(data.license === "MIT") {
    return `[${data.license}](https://choosealicense.com/licenses/mit/)`
  } else if(data.license === "Apache") {
    return `[${data.license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if(data.license === "Mozilla") {
    return `[${data.license}](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if(data.license === "GNU") {
    return `[${data.license}](https://choosealicense.com/licenses/agpl-3.0/)`
  }  
}

//this section generates a brief description of the license
function renderLicenseSection(data) {
  console.log("SUSHI")
  if(!data.license) {
    return ""
  } else if(data.license === "MIT") {
    return `
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    `
  } else if(data.license === " Apache") {
    return `
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    `
  } else if(data.license === "Mozilla") {
    return `
    Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
    `
  } else if(data.license === "GNU") {
    return `
    Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.
    `
  }
}

//this function generates the readme dynamically
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#installation)</br>
  * [Usage](#usage)</br>
  * [License](#license)</br>
  * [Contributing](#contributing)</br>
  * [Tests](#tests)</br>
  * [Questions](#questions)</br>
  </br>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data)} </br>
  ${renderLicenseLink(data)} </br>
  ${renderLicenseSection(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Here is my github profile: [Github](https://github.com/${data.github})</br>
  Reach me via email with any additional questions: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown

//if time, ask about video presentation context. What goes in it? Do I talk? NO TALKING
//In the rubric, for submission, it is required that we submit a sample README it says? YES submit README sample
//TESTS: if not tests, write no tests. if jest, "jest"


