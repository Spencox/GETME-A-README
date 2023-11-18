
module.exports = {
    customReadMeQuestions(sections, questions) {
        const userSelectedSections = [];
        sections.forEach(section => {
            for(const question of questions) {
                if(section === question.name) {
                    userSelectedSections.push(question);
                }
            }
        })
        return userSelectedSections
    },
    makeTOC(data) {
        const tableOfContents = 
        `
${data.Installation ? '- [Installation](#installation)':''}
${data.Usage ? '- [Usage](#usage)':''}
${data.Contributions ? '- [Contributions](#contributions)':''}
${data.Tests ? '- [Tests](#tests)':''}
${data.Features ? '- [Features](#features)':''}
${data.Badges ? '- [Badges](#badges)':''}
        `
        return tableOfContents
    }
}


