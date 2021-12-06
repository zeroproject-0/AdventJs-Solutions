const contarOvejas = require('./Challenge01/index');
const listGifts = require('./Challenge02/index');
const isValid = require('./Challenge03/index');
const createXmasTree = require('./Challenge04/index');
const daysToXmas = require('./Challenge05/index');
const sumPairs = require('./Challenge06/index');

(() => {
	// console.log( contarOvejas([ { name: 'Noa', color: 'azul' }, { name: 'Euge', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }, ]));
	// console.log( listGifts('bici coche balón _playstation bici    coche   peluche'));
	// console.log(isValid('bici coche (balón) bici coche peluche'));
	// console.log(createXmasTree(3));
	// console.log(daysToXmas(new Date('Dec 1, 2021')));
	console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
	console.log(sumPairs([-3, -2, 7, -5], 10)); // null
	console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
	console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
	console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
})();
