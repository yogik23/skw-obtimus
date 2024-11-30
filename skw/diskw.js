const chalk = require('chalk');
const figlet = require('figlet');

const welcomeskw = chalk.hex('#4B0082')(`
         ███████╗██╗  ██╗██╗    ██╗
         ██╔════╝██║ ██╔╝██║    ██║
         ███████╗█████╔╝ ██║ █╗ ██║
         ╚════██║██╔═██╗ ██║███╗██║
         ███████║██║  ██╗╚███╔███╔╝
         ╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ 
`);

function displayskw() {
  console.clear();
  console.log(welcomeskw);
  console.log(chalk.hex('#800080')(" ╔══════════════════════════════════════════════╗"));
  console.log(chalk.hex('#800080')(" ║      Fitur Autobot by SKW AIRDROP HUNTER     ║"));
  console.log(chalk.hex('#800080')(" ║══════════════════════════════════════════════║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 1️⃣  Multi Akun                    ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 2️⃣  Auto Login                            ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 3️⃣  Jangan Jual                ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 4️⃣  JANGAN DIJUAL                          ║"));
  console.log(chalk.hex('#800080')(" ╚══════════════════════════════════════════════╝"));
  console.log(chalk.hex('#74BBFB')("   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"));
  console.log('\n\n');
}

function generateVirusMessage() {
    return new Promise((resolve, reject) => {
        figlet('VIRUS   WARNING !!!', { font: 'Small' }, function(err, data) {
            if (err) {
                reject('Something went wrong...');
                return;
            }
            resolve(chalk.red(data));
        });
    });
}

function moveMessage(message) {
    let x = 0;
    let y = 0;
    let direction = 'right';

    const maxX = process.stdout.columns - message.length;
    const maxY = process.stdout.rows - 6;

    const intervalId = setInterval(() => {
        let paddingX = ' '.repeat(x);
        let paddingY = '\n'.repeat(y);
        let screen = paddingY + paddingX + message;

        console.clear();
        console.log(screen);

        if (direction === 'right') {
            x++;
            if (x >= maxX) direction = 'down';
        } else if (direction === 'down') {
            y++;
            if (y >= maxY) direction = 'left';
        } else if (direction === 'left') {
            x--;
            if (x <= 0) direction = 'up';
        } else if (direction === 'up') {
            y--;
            if (y <= 0) direction = 'right';
        }

    }, 30);

    setTimeout(() => {
        clearInterval(intervalId);
        console.clear();
    }, 3000);
}

async function displayskw2() {
    try {
        const message = await generateVirusMessage();
        moveMessage(message);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { displayskw, displayskw2 };
