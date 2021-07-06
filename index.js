const program = require('commander');

program.version('1.0.0').description('Simple password generator'); // version & description of app

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-s, --save', 'save password to password.txt', false)
	.option('-nn, --no-numbers', 'remove numbers')
	.option('-ns, --no-symbols', 'remove symbols')
	.parse()