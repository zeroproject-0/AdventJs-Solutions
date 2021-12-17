module.exports = (symbols = '') => {
	const symbolsObject = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
	const symbolsArray = symbols.split('');
	let result = 0;
	for (let i = 0; i < symbolsArray.length; i++) {
		if (!symbolsObject[symbolsArray[i]]) return NaN;
		let actual = symbolsObject[symbolsArray[i]];
		let next = symbolsObject[symbolsArray[i + 1]];
		result = actual < next ? result - actual : result + actual;
	}
	return result;
};
