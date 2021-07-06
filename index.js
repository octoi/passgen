const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version('1.0.0').description('Simple password generator'); // version & description of app

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-c, --copy', 'copy password to clipboard')
	.option('-s, --save', 'save password to passwords.txt', false)
	.option('-nn, --no-numbers', 'remove numbers')
	.option('-ns, --no-symbols', 'remove symbols')
	.option('-nl, --no-letters', 'remove letters')
	.parse()

const { length, copy, save, numbers, symbols, letters } = program.opts();

// Get generated password
createPassword(length, numbers, symbols, letters).then(generatedPassword => {

	console.log(chalk.blue('Generated Password : ') + chalk.bold.green(generatedPassword));

	if (copy) {
		clipboardy.writeSync(generatedPassword);
		console.log(chalk.yellow('Password copy to clipboard'))
	}

	if (save) {
		savePassword(generatedPassword);
	}

}).catch(message => {

	console.log(chalk.red(message))

})