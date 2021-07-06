const program = require('commander');
const chalk = require('chalk')
const createPassword = require('./utils/createPassword');

program.version('1.0.0').description('Simple password generator'); // version & description of app

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-s, --save', 'save password to password.txt', false)
	.option('-nn, --no-numbers', 'remove numbers')
	.option('-ns, --no-symbols', 'remove symbols')
	.option('-nl, --no-letters', 'remove letters')
	.parse()

const { length, save, numbers, symbols, letters } = program.opts();

// Get generated password
createPassword(length, numbers, symbols, letters).then(generatedPassword => {
	console.log(chalk.blue('Generated Password : ') + chalk.bold.green(generatedPassword))
}).catch(message => {
	console.log(chalk.red(message))
})