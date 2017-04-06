
import React, { Component } from 'react';
import Cell from './Cell'
import styles from '../css/board.css'

export default class Board extends Component {

	constructor(props) {
		super(props)

		let board = this.createBoard();

		this.state = {
			board: board,
			currentPlayer: 'X'
		}
	}

	createBoard() {
		let board = new Array(this.props.rows);
		for ( var row = 0 ; row < this.props.rows ; row++ ) {
			board[row] = new Array(this.props.cols);
			board[row].fill('');
		};	

		return board;	
	}

	checkWinner() {
		// TODO: please add correct winner algo!
		return this.state.board[0][0];
	}

	drawBoard() {
		let board = [];
		for ( let i = 0 ; i < this.props.rows ; i++ ) {
			for ( let j = 0 ; j < this.props.cols ; j++ ) {
				var id = i + '' + j;
				board.push(
					<Cell 
						key={id}
						id={id}
						play={this.play.bind(this)}
						value={this.state.board[i][j]} />
				);
			}
		}
		return board;
	}

	reset() {
		let board = this.createBoard();
		this.setState({
			board: board,
			currentPlayer: 'X'
		})
	}

	play(ij) {
		let i = ij[0];
		let j = ij[1];
		let board = this.state.board;
		board[i][j] = this.state.currentPlayer;
		this.setState({
			board: board,
			currentPlayer: this.state.currentPlayer==='X'?'O':'X'
		})

		let winner = this.checkWinner();
		if ( winner != '' ) {
			this.props.hasWinner(winner);
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