module.exports = (time = 0, courses = []) => {
	let results = [];
	for (let i = 0; i < courses.length - 1; i++) {
		for (let j = i + 1; j < courses.length; j++) {
			if (courses[i] + courses[j] <= time)
				results.push([i, j, courses[i] + courses[j]]);
			else break;
		}
	}
	if (results.length === 0) return null;
	let result = results.sort((x, y) => x[2] - y[2]).find((x) => x[2] === time);
	return result
		? [result[0], result[1]]
		: [results.at(-1)[0], results.at(-1)[1]];
};
