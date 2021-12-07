module.exports = contains = (store, product) => {
	let arrStore = Object.values(store);
	for (let i = 0; i < arrStore.length; i++) {
		if (arrStore[i] === product) {
			return true;
		} else {
			if (arrStore[i] instanceof Object) {
				if (contains(arrStore[i], product)) {
					return true;
				}
			}
		}
	}
	return false;
};
