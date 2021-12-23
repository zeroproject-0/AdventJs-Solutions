module.exports = (from = '', to = '') => {
	let fromSet = new Set(from.split(''));
	let toSet = new Set(to.split(''));
	return fromSet.size === toSet.size && from.length === to.length;
};
