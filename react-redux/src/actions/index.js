
import { getSuggestedMove } from '../api';

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

export function fetchingSuggestedMove() {
	return {
		type: 'FETCHING_SUGGESTED_MOVE',
	}
}

export function fetchSuggestedMove(board, rows, cols) {
	return (dispatch, currState) => {
		dispatch(fetchingSuggestedMove());
		getSuggestedMove(board, rows, cols).then((res) => {
			// Why have board part of suggestMove?
			// Because this is the suggested move for a particular board state!
			dispatch(suggestMove(res, board));
		});//.catch((err) => {});
	}
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

export function setWinner(winner) {
	return {
		type: 'SET_WINNER',
		payload: {
			winner
		}
	};
}
