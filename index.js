const simpleParser = require('mailparser').simpleParser;

const fs = require('fs');

proceedAll();

async function proceedAll() {
    await proceedAsync('utf8Body.eml');
    await proceedAsync('utf8Subject.eml');
    await proceedAsync('iso2022jpBody.eml');
    await proceedAsync('iso2022jpSubject.eml');
}

async function proceedAsync(emlFile) {
    console.log(`Proceeding ${emlFile}`);

    const source = await fs.promises.readFile(emlFile);

    const parsed = await simpleParser(source);

    console.log(parsed && parsed.subject);
}
