module.exports = (capacity = 0, trip = []) => {
	let totalGifts = 0;
	let giveGifts = trip.map((gift) => [gift[0], gift[2]]);
	let pickGifts = trip.map((gift) => [gift[0], gift[1]]);
	let maxGiveGifts = Math.max(...giveGifts.map((gift) => gift[1]));
	for (let i = 0; i < maxGiveGifts; i++) {
		let pickGift = pickGifts.filter((gift) => gift[1] === i);
		if (pickGift.length > 0) totalGifts += pickGift[0][0];
		let giveGift = giveGifts.filter((gift) => gift[1] === i);
		if (giveGift.length > 0) totalGifts -= giveGift[0][0];
		if (totalGifts > capacity) return false;
	}
	return true;
};
