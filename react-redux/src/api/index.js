
import { boardFull } from '../util/array'
import { getRandomInt } from '../util/random'

// imagine this to be a network call
export const getSuggestedMove = (board, rows, cols) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if ( boardFull(board) ) {
				reject('');
				return;
			}
			let r, c;
			do {
				r = getRandomInt(0, rows);
				c = getRandomInt(0, cols);
			} while (board[r][c] !== '');
			resolve(r + '' + c);
		}, 250);
	});
}