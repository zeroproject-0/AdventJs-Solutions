module.exports = (carriers = [], carrierID = '') => {
	const cb = (carriers = [], carriersIDs = []) => {
		return carriersIDs.reduce((acc, carrierID = '') => {
			return (
				acc +
				carriers.reduce((acc, carrier = []) => {
					if (carrier[0] === carrierID) {
						return acc + carrier[1] + cb(carriers, carrier[2]);
					}
					return acc;
				}, 0)
			);
		}, 0);
	};
	return cb(carriers, [carrierID]);
};
