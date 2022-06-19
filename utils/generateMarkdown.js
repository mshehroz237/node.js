// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
//styling and adding the data into the readme file using string literals and more

function generateMarkdown(data) {
  return `# ${data.title}
  # Description
   ${data.description}

   # Installation
   ${data.installation}

   # Usage
   ${data.usage}

   # Contribution
   ${data.contribution}

   # Tests
   ${data.test}

   # License
   ${data.license}
   ![badge](https://img.shields.io/badge/license-${data.lisence}-brightgreen)
    This application is covered by the ${data.lisence} license. 


    ## Table of Contents

   * [desciption](#Description)
   * [installation](#Installation)
   * [usage](#Usage)
   * [contribution](#contribution)
   * [installation](#Tests)


    # Questions
    Find me on GitHub: [${data.github}](https://github.com/${data.github})
    Email me with any questions: ${data.email}
`;
}
//expoerting the module
module.exports = generateMarkdown;
