module.exports = createXmasTree = (height) => {
	let tree = '';
	let treeLeaf = 1;
	for (let i = height; i > 0; i--) {
		tree += '_'.repeat(i - 1) + '*'.repeat(treeLeaf) + '_'.repeat(i - 1) + '\n';
		treeLeaf += 2;
	}
	tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
	tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
	return tree;
};
