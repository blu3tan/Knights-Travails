// const board = () => {
// 	const board = [];
// 	for (let i = 0; i <= 7; i++) {
// 		let column = [];
// 		for (let j = 0; j <= 7; j++) {
// 			column.push(`${i},${j}`);
// 		}
// 		board.push(column);
// 	}
// 	return board;
// };

// function knightMoves(source, dest) {
// 	let chessBoard = board();

// 	let [a, b] = source;
// 	let [c, d] = dest;
// 	let moves = 0;
// 	let initialPosition = chessBoard[a][b];
// 	let finalPosition = chessBoard[c][d];

// 	if (initialPosition == finalPosition)
// 		return console.log(`Done in ${moves} moves`);

// }

// This function generates a list of all the possible moves
// from the current position of the knight
const calculateMoves = ([x, y]) => {
	let movesList = [
		[x + 2, y + 1],
		[x + 2, y - 1],
		[x - 2, y + 1],
		[x - 2, y - 1],
		[x + 1, y + 2],
		[x + 1, y - 2],
		[x - 1, y + 2],
		[x - 1, y - 2],
	];

	//this helper function check that the moves are inside the board
	const stayInBounds = (list) => {
		const filtered = [];
		list.forEach((element) => {
			let [a, b] = element;
			if (a > 0 && a <= 7 && b > 0 && b <= 7) filtered.push(element);
		});
		return filtered;
	};

	//the final return is the list filtered containing only inbounds moves
	let movesInBound = stayInBounds(movesList);
	return movesInBound;
};

function knightMoves(source, dest, moves = 0) {
	if (source.toString() === dest.toString())
		return console.log(`Done in ${moves} moves`);
	let visited = new Set();
	let queue = [];

	let possibleMoves = calculateMoves(source);
	moves += 1;
	possibleMoves.forEach((move) => {
		if (visited.has(move)) return;
		visited.add(move);
		if (move.toString() === dest.toString())
			return console.log(`Done in ${moves}`);
		queue.push(move);
	});

	while (queue.length > 0) {
		let current = queue.shift();
		let possibleMoves = calculateMoves(current);
		moves += 1;
		possibleMoves.forEach((move) => {
			if (visited.has(move)) return;
			visited.add(move);
			if (move.toString() === dest.toString())
				return console.log(`Done in ${moves}`);
			queue.push(move);
		});
	}
}

knightMoves([3, 3], [4, 3]);
