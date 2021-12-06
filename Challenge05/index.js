module.exports = daysToXmas = (date) => {
	let christmas = new Date('Dec 25, 2021');
	let milliseconds = christmas.getTime() - date.getTime();
	return Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
};
