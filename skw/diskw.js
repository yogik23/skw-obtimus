const chalk = require('chalk');

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
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 1️⃣  Multi Akun                            ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 2️⃣  Auto Login                            ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 3️⃣  Jangan Jual                           ║"));
  console.log(chalk.hex('#00FFFF')(" ║ ➤ 4️⃣  JANGAN DIJUAL                         ║"));
  console.log(chalk.hex('#800080')(" ╚══════════════════════════════════════════════╝"));
  console.log(chalk.hex('#74BBFB')("   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"));
  console.log('\n\n');
}

module.exports = { displayskw };
