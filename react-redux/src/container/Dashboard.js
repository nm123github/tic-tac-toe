
import React, { Component } from 'react'
import { connect } from 'react-redux'	// <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { resetBoard, setWinner } from '../actions/index'

class Dashboard extends Component {	

	constructor(props) {
		super(props)

	}

	reset() {
		this.props.resetBoard()
		this.props.setWinner('')
	}

	compare2d(a, b) {
		return a.join(',') === b.join(',')
	}

	render() {
		const winner = this.props.winner
							?<h1>And the winner is: {this.props.winner}</h1>
							:<p></p>
		const suggestedmove = this.props.suggestedmove.move && this.compare2d(this.props.board, this.props.suggestedmove.board) && !this.props.winner
							?<h3>Suggested move: [{this.props.suggestedmove.move[0]} - {this.props.suggestedmove.move[1]}]</h3>
							:<p></p>

		return (
			<div>
				{winner}
				{suggestedmove}
				<input type="button" value="reset" onClick={this.reset.bind(this)} />
			</div>
		)

	}
}

function mapStateToProps(state) {
	return {
		winner: state.winner,
		suggestedmove: state.suggestedmove,
		board: state.board
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		resetBoard: resetBoard,
		setWinner: setWinner
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
