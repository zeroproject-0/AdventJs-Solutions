module.exports = sumPairs = (numbers, result) => {
	let arrayResult = null;
	numbers = numbers.reverse();
	while (numbers.length > 0) {
		let first = numbers.pop();
		for (let n of numbers)
			if (first + n === result) return (arrayResult = [first, n]);
	}
	return arrayResult;
};
