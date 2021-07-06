const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-_=+[{]}\\|;:\'"<,>.?/'

const createPassword = (length, hasNumbers, hasSymbols, hasLetters) => {
	let chars = '';
	hasLetters ? (chars += alpha) : ''
	hasNumbers ? (chars += numbers) : ''
	hasSymbols ? (chars += symbols) : ''

	if (chars.length === 0) {
		return 'What kind of password you want, an empty one ??'
	}

	return generatePassword(length, chars);
}

const generatePassword = (length, chars) => {
	let password = '';
	length = parseInt(length);

	if (isNaN(length)) {
		console.log('Invalid length, generating password with default length (8)')
		length = 8;
	}

	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return password;
}

module.exports = createPassword;