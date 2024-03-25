const board = () => {
	const board = [];
	for (let i = 0; i <= 7; i++) {
		let column = [];
		for (let j = 0; j <= 7; j++) {
			column.push(`${i},${j}`);
		}
		board.push(column);
	}
	return board;
};

let chessBoard = board();

console.table(chessBoard);
