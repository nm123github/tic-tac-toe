

function createBoard(rows, cols) {
	let board = new Array(rows);
	for ( var row = 0 ; row < rows ; row++ ) {
		board[row] = new Array(cols);
		board[row].fill('');
	};	

	return board;	
}

export default function reducer_board(state = 0, action) {

	if ( action.type === 'PLAY' ) {
		let board = state.map(function(row) {
    		return row.slice();
		});
		board[action.payload.row][action.payload.col] = action.payload.val;
		return board;
	}

	if ( action.type === 'CREATE_BOARD' ) {
		return createBoard(action.payload.rows, action.payload.cols);
	}

	if ( action.type === 'RESET_BOARD' ) {
		// create another empty board!
		return createBoard(state.length, state[0].length);
	}		

	return state;

}

