module.exports = (change) => {
	const changeArray = [50, 20, 10, 5, 2, 1];
	const result = [0, 0, 0, 0, 0, 0];
	changeArray.map((item, index) => {
		while (change - item >= 0) {
			change -= item;
			result[index] += 1;
		}
	});
	return result.reverse();
};
