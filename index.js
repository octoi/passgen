const program = require('commander');
const log = console.log; // use log("") instead of console.log("")

program.version('1.0.0').description('Simple password generator'); // version & description of app

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-s, --save', 'save password to password.txt', false)
	.option('-nn, --no-numbers', 'remove numbers')
	.option('-ns, --no-symbols', 'remove symbols')
	.parse()

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);