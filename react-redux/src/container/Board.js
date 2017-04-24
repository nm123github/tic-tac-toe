
import React, { Component } from 'react';
import Cell from './Cell'
import styles from '../css/board.css'

import { connect } from 'react-redux'	// <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { 
	setWinner,
	fetchSuggestedMove,
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
    	}

    	// this.isLoading	nextProps.isLoading		fetchSuggestedMove
		// F 				F 						=> fetch
		// F 				T 						=> NO
		// T 				F 						=> NO
		// T 				T 						=> How did we get here!
    	if ( !this.props.isLoading && !nextProps.isLoading ) {
    		this.props.fetchSuggestedMove(nextProps.board, nextProps.rows, nextProps.cols);
    	}
    	
	}

	checkWinner(props) {
		if ( props.board && props.board[0][0] ) {
			this.props.setWinner(props.board[0][0]);
		}
	}

	drawBoard() {

		if ( !this.props.board || this.props.isLoading )
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

	play(ij) {
		let i = ij[0];
		let j = ij[1];
		this.props.play(i, j, this.props.currentPlayer);
		this.props.switchPlayer();
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
		currentPlayer: state.currentPlayer,
		isLoading: state.suggestedmove.isLoading
	}
}

// anything returned from this function will end up as props on Board
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createBoard: createBoard,
		play: play,
		switchPlayer: switchPlayer,
		setWinner: setWinner,
		fetchSuggestedMove: fetchSuggestedMove,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
