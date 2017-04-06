

export default function reducer_winner(state = '', action) {

	if ( action.type === 'SET_WINNER' ) {
		return action.payload.winner;
	}

	return state;

}