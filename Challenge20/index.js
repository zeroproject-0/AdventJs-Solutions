module.exports = (letter = '') => {
	return letter
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.split('')
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.filter((item, index, array) => array.indexOf(item) === index)
		.join('')
		.trim()
		.includes('abcdefghijklmnopqrstuvwxyz');
};
