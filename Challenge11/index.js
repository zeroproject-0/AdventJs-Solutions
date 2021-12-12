module.exports = (times) => {
	const ticket = 12 * times;
	let fidelidadCost = 250;
	for (let i = 1; i <= times; i++) fidelidadCost += 12 * 0.75 ** i;
	return ticket > fidelidadCost;
};
