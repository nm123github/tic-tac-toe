
import { combineReducers } from 'redux'
import BoardReducer from './reducer_board'
import CurrentPlayerReducer from './reducer_current_player'
import WinnerReducer from './reducer_winner'

// going to add key called books to our state
// notice the value comes from a reducer
const rootReducer = combineReducers({
	// state: (state = {}) => state

	// please note that these keys will end up as keys on global state!
	board: BoardReducer,
	currentPlayer: CurrentPlayerReducer,
	winner: WinnerReducer
});

export default rootReducer;
