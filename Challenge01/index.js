module.exports = contarOvejas = (ovejas) => {
	return ovejas.filter(
		(o) =>
			o.color.toLowerCase() === 'rojo' &&
			o.name.toLowerCase().includes('a') &&
			o.name.toLowerCase().includes('n')
	);
};
