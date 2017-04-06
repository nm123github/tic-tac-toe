

export default function reducer_current_player(state = 'X', action) {

	if ( action.type === 'SWITCH' ) {
		return state==='X'?'O':'X';
	}	

	return state;
}