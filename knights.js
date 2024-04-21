const moves = [
	[-2, -1],
	[-2, 1],
	[-1, -2],
	[-1, 2],
	[1, -2],
	[1, 2],
	[2, -1],
	[2, 1],
];

function knightMoves(source, dest) {
	let queue = [[source]];
	let visited = new Set([source.toString()]);
	while (queue.length > 0) {
		let path = queue.shift();
		let current = path[path.length - 1];

		if (current[0] === dest[0] && current[1] === dest[1]) {
			return console.log(`You made it in ${path.length - 1} moves!`);
		}
		moves.forEach((move) => {
			let next = [current[0] + move[0], current[1] + move[1]];

			if (validMove(next) && !visited.has(next.toString())) {
				visited.add(next.toString());

				queue.push([...path, next]);
			}
		});
	}

	function validMove([x, y]) {
		return x >= 0 && x < 8 && y >= 0 && y < 8;
	}
}

knightMoves([3, 3], [4, 3]);
