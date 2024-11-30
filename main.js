const fs = require('fs');
const { sendRequest, Output, spinnerDelay } = require('./skw/request');
const { displayskw } = require('./skw/diskw');

function readTokens() {
    const data = fs.readFileSync('tokens.json', 'utf8');
    return JSON.parse(data);
}

function getToken(index) {
    const tokens = readTokens();
    return tokens[index] ? tokens[index].token : null;
}

async function main() {
    console.clear();
    displayskw();
    const tokens = readTokens();
    const output = new Output();
    
    for (let i = 0; i < tokens.length; i++) {
        await sendRequest(i, output);
        await spinnerDelay(5);
    }
}

main();
