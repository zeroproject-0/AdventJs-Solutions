module.exports = listGifts = (letter) => {
	const cartas = letter
		.split(' ')
		.filter((c) => c.length > 0 && !c.startsWith('_'));

	const regalos = {};
	cartas.forEach((c) => (regalos[c] = regalos[c] ? regalos[c] + 1 : 1));
	return regalos;
};
