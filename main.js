const axios = require('axios');
const fs = require('fs');
const Table = require('cli-table3');
const ora = require('ora');
const userAgents = require('./skw/userAgents');
const { displayskw, displayskw2 } = require('./skw/diskw');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function readTokens() {
    const data = fs.readFileSync('tokens.json', 'utf8');
    return JSON.parse(data);
}

function getToken(index) {
    const tokens = readTokens();
    return tokens[index] ? tokens[index].token : null;
}

async function sendRequest(index, output) {
    const url = "https://api2.glbgpt.com/ao-api/permble/join";
    const token = getToken(index);

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json",
        "User-Agent": userAgents[index]
    };

    try {
        const response = await axios.post(url, {}, { headers });

        const user = response.data.user;
        if (user) {
            const { nickName, totalRwd, totalKill, totalWin } = user;
            const NickNama = nickName.split(' ').slice(0, 2).join(' ');
            output.addRow('Sukses', NickNama, totalRwd, totalKill, totalWin);
        } else {
            output.addRow('Gagal', 'N/A', 'N/A', 'N/A', 'N/A');
        }
        output.printTable();
    } catch (error) {
        output.addRow('Gagal', 'N/A', 'N/A', 'N/A', 'N/A');
        output.printTable();
    }
}

class Output {
    constructor() {
        this.table = new Table({
            head: ['Status', 'NickName', 'Rwd', 'Kill', 'Win'],
            colWidths: [12, 30, 15, 10, 10],
            style: {
                head: ['cyan'],
                border: ['gray'],
                'padding-left': 1,
                'padding-right': 1
            }
        });
    }

    addRow(status, nickName, rwd, kill, win) {
        this.table.push([
            status === 'Sukses' ? '✔ Sukses' : '❌ Gagal',
            status === 'Sukses' ? nickName : 'N/A',
            status === 'Sukses' ? rwd : 'N/A',
            status === 'Sukses' ? kill : 'N/A',
            status === 'Sukses' ? win : 'N/A'
        ]);
    }

    printTable() {
        console.clear();
        console.log(this.table.toString());
    }
}

async function spinnerDelay(seconds) {
    const spinner = ora().start();

    return new Promise((resolve) => {
        let countdown = seconds;
        const countdownInterval = setInterval(() => {
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                spinner.succeed();
                resolve();
            } else {
                spinner.text = `${countdown} detik...`;
                countdown--;
            }
        }, 1000);
    });
}

async function startBot() {
    const tokens = readTokens();
    const output = new Output();
    
    for (let i = 0; i < tokens.length; i++) {
        await sendRequest(i, output);
        await spinnerDelay(5);
    }

    startBot();
}

async function main() {
    console.clear();
    displayskw();
    await delay(2000);
    displayskw2();

    const tokens = readTokens();
    const output = new Output();
    
    for (let i = 0; i < tokens.length; i++) {
        await sendRequest(i, output);
        await spinnerDelay(5);
    }
}


main();
