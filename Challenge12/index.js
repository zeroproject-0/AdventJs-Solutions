module.exports = (obstacles = []) => {
	let max = Math.max(...obstacles);
	let jump = 1;
	for (let i = 2; i < max; i++) {
		if (obstacles.every((o) => o % i !== 0)) {
			jump = i;
			break;
		}
	}
	return jump;
};
