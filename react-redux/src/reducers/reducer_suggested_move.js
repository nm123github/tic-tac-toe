

export default function reducer_suggested_move(state = '', action) {

	if ( action.type === 'SUGGESTED_MOVE' ) {
		return {
			move: action.payload.suggestedmove,
			board: action.payload.board
		};
	}

	return state;
}