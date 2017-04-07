My starter react project

Simply following instructions from http://andrewhfarmer.com/build-your-own-starter/


* Create App.js to hold all your components!

* Create a board and a cell component

* State of board will be part of the board.js. The cell will not really have a state. it will simply render whatevers passed to it

* Remember the whole thing about one way communication. Whatever you need to render in a cell is passed in. Messages are send out using callbacks!

* Whenever a cell is clicked, it uses a callback to pass the cell 'id' which was clicked into the board. The board then updates the board state which in turn will re-render the cell

* Dont forget to bind handler methods to 'this'
play={this.play.bind(this)}

* use css-loader and style-loader
npm install webpack-combine-loaders style-loader css-loader --save

