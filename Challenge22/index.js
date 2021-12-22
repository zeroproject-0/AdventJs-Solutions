module.exports = countDecorations = (bigTree = {}) => {
	if (!bigTree?.value) return 0;
	return (
		bigTree.value +
		countDecorations(bigTree.left) +
		countDecorations(bigTree.right)
	);
};
