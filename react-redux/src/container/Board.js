
import React, { Component } from 'react';
import Cell from './Cell'
import styles from '../css/board.css'

import { connect } from 'react-redux'	// <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { 
	setWinner,
	suggestMove,
	resetSuggestedMove,
	createBoard, 
	play,
	switchPlayer
} from '../actions/index'
import { getRandomIntInclusive, getRandomInt } from '../util/random';

class Board extends Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		if ( this.props.board === 0 )
			this.props.createBoard(this.props.rows, this.props.cols)
	}

	componentWillReceiveProps(nextProps) {
    	let winner = this.checkWinner(nextProps); 
    	if (winner) {
    		this.props.setWinner(props.board[0][0]);
    	} else {
    		this.getSuggestedMove(nextProps.board, nextProps.rows, nextProps.cols).then((res) => {
    				// Why have board part of suggestMove?
    				// Because this is the suggested move for a particular board state!
	    			this.props.suggestMove(res, nextProps.board);
    		}).catch((err) => {

    		});
    	}
	}

	checkWinner(props) {
		if ( props.board && props.board[0][0] ) {
			this.props.setWinner(props.board[0][0]);
		}
	}

	drawBoard() {

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

	boardFull(board) {
		for ( var i = 0 ; i < board.length ; i++ )
			for ( var j = 0 ; j < board[0].length ; j++ )
				if ( board[i][j] === '' )
					return false;
		return true;
	}

	// imagine this to be a network call
	getSuggestedMove(board, rows, cols) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if ( this.boardFull(board) ) {
					reject('');
					return;
				}
				let r, c;
				do {
					r = getRandomInt(0, rows);
					c = getRandomInt(0, cols);
				} while (board[r][c] !== '');
				resolve(r + '' + c);
			}, 1000);
		});
	}

	play(ij) {
		let i = ij[0];
		let j = ij[1];
		this.props.play(i, j, this.props.currentPlayer);
		this.props.switchPlayer();
		this.props.resetSuggestedMove();
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
	// Whatever gets retrieved from here will show up as props inside of Board
	return {
		board: state.board,
		currentPlayer: state.currentPlayer
	}
}

// anything returned from this function will end up as props on Board
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createBoard: createBoard,
		play: play,
		switchPlayer: switchPlayer,
		setWinner: setWinner,
		suggestMove: suggestMove,
		resetSuggestedMove: resetSuggestedMove
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
