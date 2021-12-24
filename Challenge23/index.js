module.exports = (from = '', to = '') => {
	while (from.length > 0) {
		if (from.charAt(0) === from.charAt(1) || to.charAt(0) === to.charAt(1)) {
			if (from.charAt(0) !== from.charAt(1) || to.charAt(0) !== to.charAt(1))
				return false;
		}
		from = from.slice(1);
		to = to.slice(1);
	}

	return true;
};
