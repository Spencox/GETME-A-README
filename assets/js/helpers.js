
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
        ${data.Usage ? '- [Usage](#Usage)':''}
        ${data.Contributions ? '- [Contributions](#Contributions)':''}
        ${data.Tests ? '- [Tests](#Tests)':''}
        ${data.Features ? '- [Features](#Features)':''}
        ${data.Badges ? '- [Badges](#Badges)':''}
        `
        //console.log(tableOfContents);
        //const neatTOC = tableOfContents.trim().replace(/\n\s*\n/g, '\n');
        //console.log('NEAT CONSOLE LOG: ', neatTOC)
        return tableOfContents
    }
}


