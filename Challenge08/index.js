module.exports = maxProfit = (prices) => {
	let max = [0, 0];
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++)
			max = [max[0] < prices[j] ? prices[j] : max[0], j - 1];
		if (max[0] > prices[i] && max[1] > i) return max[0] - prices[i];
	}
	return -1;
};
