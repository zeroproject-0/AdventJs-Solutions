module.exports = (treeA, treeB) => {
	const orderJson = (obj) =>
		JSON.stringify(obj)
			.split('')
			.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
			.join('');
	return orderJson(treeA) === orderJson(treeB);
};
