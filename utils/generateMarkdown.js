function generateMarkdown(data) {
  return `
![avatar](${data.avatar_url}) 
Email :${data.email} 
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## badges
![License](https://img.shields.io/badge/License-${data.license}-blue)
## Contributing
${data.contribution}
## Tests
${data.tests}
## Questions
${data.questions}

---
© 2020 Amin Bouzouita.
`;
}
module.exports = generateMarkdown;
