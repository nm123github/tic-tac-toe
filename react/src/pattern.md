

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

