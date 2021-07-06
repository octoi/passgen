const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (file, password) => {
	let filename = file === true ? 'passwords.txt' : file;

	fs.open(path.join(__dirname, '../', filename), 'a', 666, (e, id) => {
		fs.write(id, password + os.EOL, null, 'utf-8', () => {
			fs.close(id, () => {
				console.log(chalk.yellow(`Password saved to ${chalk.green(filename)}`));
			});
		});
	});
}

module.exports = savePassword;