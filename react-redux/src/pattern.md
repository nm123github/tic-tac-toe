

Create App.js to hold all your components!

Create a board and a cell component

State of board will be part of the board.js. The cell will not
really have a state. it will simply render whatevers passed to it

remember the whole thing about one way communication. all you need to
render in a cell is passed in. The pass info out using callbacks!

whenever a cell is clicked, it uses a callback to pass the cell 'id' which
was clicked into the board. the board then updates the state which in turn will
re-render the cell

when you send play from board to cell dont forget to bind to correct 'this'
play={this.play.bind(this)}

why not use tsloader?
npm install ts-loader --save

npm install webpack-combine-loaders style-loader css-loader --save

how do i pass reset to Board...?
// http://andrewhfarmer.com/component-communication/
// http://stackoverflow.com/questions/41664534/passing-messages-between-components-in-react-js/

npm install redux react-redux --save

Lets redux!!

glbal state = {
	winner:
	board: 
	currentPlayer: 
}

^ create a reducer for each of these
^ create actions for each time you want to set state!

// Gotcha: PLEASe add this code in drawBoard()
// If you try to draw board before board reducer returns
// with CREATE_BOARD, you will get null pointer errors!!

		// GOTCHA 2: hold on!!
		// the above ^ code might not update this.props.board immediately
		// below check will fail!!

		// Gotcha: this 'Board' is no longer a component (but a container)
		// it does NOT have reset
		// Please use redux to reset board

setup using 
https://medium.com/@spencer_carli/setting-up-your-redux-store-3016eff82d83#.hfxw9zirk