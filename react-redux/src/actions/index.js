
// action-creators!!

export function createBoard(rows, cols) {
	return {
		type: 'CREATE_BOARD',
		payload: {
			rows: rows,
			cols: cols
		}
	};
}

export function resetBoard() {
	return {
		type: 'RESET_BOARD'
	};
}

export function play(row, col, val) {
	return {
		type: 'PLAY',
		payload: {
			row: row,
			col: col,
			val: val
		}
	};
}

export function switchPlayer() {
	return {
		type: 'SWITCH'
	};
}

export function suggestMove(move, board) {
	return {
		type: 'SUGGESTED_MOVE',
		payload: {
			suggestedmove: move,
			board: board
		}
	};
}

export function resetSuggestedMove() {
	return {
		type: 'RESET_SUGGESTED_MOVE'
	};
}

export function setWinner(winner) {
	return {
		type: 'SET_WINNER',
		payload: {
			winner
		}
	};
}
