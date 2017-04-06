
import React, { Component } from 'react';
import Cell from './Cell'
import styles from '../css/board.css'

import { connect } from 'react-redux'	// <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { createBoard, play, switchPlayer } from '../actions/index'

class Board extends Component {

	constructor(props) {
		super(props)

		/*let board = this.createBoard();
		this.state = {
			board: board,
			currentPlayer: 'X'
		}*/

		this.props.createBoard(this.props.rows, this.props.cols)
		//console.log(this.props.board)
	}

	/*createBoard() {
		let board = new Array(this.props.rows);
		for ( var row = 0 ; row < this.props.rows ; row++ ) {
			board[row] = new Array(this.props.cols);
			board[row].fill('');
		};	

		return board;	
	}*/

	checkWinner(props) {
		// TODO: please add correct winner algo!
		//return this.state.board[0][0];
		return props.board && props.board[0][0];
	}

	drawBoard() {

		// Gotcha: PLEASe add this code in drawBoard()
		// If you try to draw board before board reducer returns
		// with CREATE_BOARD, you will get null pointer errors!! 
		if ( !this.props.board )
			return <h1>Loading...</h1>;

		let board = [];
		for ( let i = 0 ; i < this.props.rows ; i++ ) {
			for ( let j = 0 ; j < this.props.cols ; j++ ) {
				var id = i + '' + j;
				board.push(
					<Cell 
						key={id}
						id={id}
						play={this.play.bind(this)}
						value={this.props.board[i][j]} />
				);
			}
		}
		return board;
	}

	reset() {

		/*let board = this.createBoard();
		this.setState({
			board: board,
			currentPlayer: 'X'
		})*/

		this.props.createBoard(this.props.rows, this.props.cols);
	}

	play(ij) {
		let i = ij[0];
		let j = ij[1];
		/*let board = this.state.board;
		board[i][j] = this.state.currentPlayer;
		this.setState({
			board: board,
			currentPlayer: this.state.currentPlayer==='X'?'O':'X'
		})*/
		this.props.play(i, j, this.props.currentPlayer);

		// GOTCHA 2: hold on!!
		// the above ^ code might not update this.props.board immediately
		// below check will fail!!
		/*let winner = this.checkWinner();
		if ( winner != '' ) {
			this.props.hasWinner(winner);
			this.reset();
		}*/
	}

	componentWillReceiveProps(nextProps) {
		// GOTCHA:
		// we need to check for winner using the nextProps,
		// and NOT the current props!
    	let winner = this.checkWinner(nextProps); 
    	if ( winner != '' ) {
    		this.props.hasWinner(winner);
        	this.reset();
    	}
	}

	getClassName() {
		return styles.board
	}

	render() {
		return (
			<div className={this.getClassName()}>
				{this.drawBoard()}
			</div>
		)
	}

}

// function is the glue between react and redux
function mapStateToProps(state) {
	// Whatever gets retrieved from here will show up as props inside of book-list
	return {
		board: state.board,
		currentPlayer: state.currentPlayer
	}
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createBoard: createBoard,
		play: play,
		switchPlayer: switchPlayer
	}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Board);
