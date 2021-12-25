module.exports = (direction = '', game = []) => {
	let index = [game.findIndex((x) => x.find((e) => e === 'm'))];
	index = [...index, game[index[0]].findIndex((x) => x === 'm')];
	let directions = {
		up: (index = [], game = []) => {
			for (let i = index[0] - 1; i >= 0; i--)
				if (game[i][index[1]] === '*') return true;
			return false;
		},
		down: (index = [], game = []) => {
			for (let i = index[0] + 1; i < game.length; i++)
				if (game[i][index[1]] === '*') return true;
			return false;
		},
		left: (index = [], game = []) => {
			for (let i = index[1] - 1; i >= 0; i--)
				if (game[index[0]][i] === '*') return true;
			return false;
		},
		right: (index = [], game = []) => {
			for (let i = index[1] + 1; i < game.length; i++)
				if (game[index[0]][i] === '*') return true;
			return false;
		},
	};
	return directions[direction](index, game);
};
