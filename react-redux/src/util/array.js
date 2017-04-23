
export const boardFull = (board) => {
	for ( var i = 0 ; i < board.length ; i++ )
		for ( var j = 0 ; j < board[0].length ; j++ )
			if ( board[i][j] === '' )
				return false;
	return true;
}