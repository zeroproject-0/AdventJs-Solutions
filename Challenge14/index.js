module.exports = (ids = []) => {
	let sum = ids.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	let sumComplete = (ids.length * (ids.length + 1)) / 2;
	return sumComplete - sum;
};
