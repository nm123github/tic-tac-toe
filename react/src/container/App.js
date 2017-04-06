
import React, { Component } from 'react';
import Board from './Board'
import Dashboard from './Dashboard'

export default class App extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			winner: ''
		}
	}

	reset() {
		// To pass data downstream we could use 'props' or refs!
		// http://andrewhfarmer.com/component-communication/
		// http://stackoverflow.com/questions/41664534/passing-messages-between-components-in-react-js/		
		this.refs.Board.reset();
	}

	hasWinner(winner) {
		this.setState({
			winner: winner
		})
	}

	render() {
		return (
			<div>
				<Board ref='Board' rows={3} cols={3} hasWinner={this.hasWinner.bind(this)} />
				<Dashboard winner={this.state.winner} reset={this.reset.bind(this)} />
			</div>
		)
	}

}