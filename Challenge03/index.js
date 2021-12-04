module.exports = isValid = (letter) => {
	let valid = !/{|}|\[|\]/g.test(letter) && /\([A-ñZ\s]+\)/gi.test(letter);
	let aLetter = letter.split('');
	let parentesis =
		aLetter.filter((w) => w === '(').length -
		aLetter.filter((w) => w === ')').length;
	return parentesis === 0 && valid;
};
