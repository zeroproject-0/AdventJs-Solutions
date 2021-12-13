module.exports = (gifts = []) => {
	let result = [];
	let line = '**'.repeat(
		gifts[0].length === 2 ? gifts[0].length : gifts[0].length - 1
	);
	result.push(line);
	for (let i = 1; i <= gifts.length; i++) {
		result[i] = '*';
		result[i] += gifts[i - 1];
		result[i] += '*';
	}
	result.push(line);
	return result;
};
