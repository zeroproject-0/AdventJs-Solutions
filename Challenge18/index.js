module.exports = (files = []) => {
	let currentFiles = files.reduce((acc, file) => ({ ...acc, [file]: -1 }), {});
	return files.map((file) => {
		currentFiles[file]++;
		return currentFiles[file] === 0
			? file
			: file + '(' + currentFiles[file] + ')';
	});
};
