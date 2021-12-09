module.exports = groupBy = (collection, it) => {
	let result = {};
	collection.map((item) => {
		let isFunction = typeof it === 'function' ? it(item) : item[it];
		result[isFunction] = result[isFunction]
			? result[isFunction].concat(item)
			: [item];
	});
	return result;
};
