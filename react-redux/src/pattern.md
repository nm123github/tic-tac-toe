
+ Create App.js to hold all your components!

+ Create a board and a cell component

+ State of board will be part of the board.js. The cell will not really have a state. it will simply render whatevers passed to it

+ Remember the whole thing about one way communication. all you need to render in a cell is passed in. The pass info out using callbacks!

+ Instead of each component holding state, we hold our app state in redux store!
board: ...,
currentPlayer: ...,
winner: ...

+ ^ Create reducers to manager each piece of state (e.g. board_reducer, current_player_reducer, winner_reducer)!

+ ^ Create action creator (functions) that will allow components to create actions which in turn can be used to change state (e.g. createBoard(rows, cols), resetBoard(), setWinner(winner), play(row, col, val), swtichPlayer())

+ Now, whenever a cell is clicked, it creates an action which will update the board state. Also, the board component will recieve state changes to board by subscribing to redux store.

+ Dont forget to bind handler methods to 'this'
play={this.play.bind(this)}

+ use css-loader and style-loader
npm install webpack-combine-loaders style-loader css-loader --save
