
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

	render() {
		const winner = this.props.winner
							?<h1>And the winner is: {this.props.winner}</h1>
							:<p></p>
		return (
			<div>
				{winner}
				<input type="button" value="reset" onClick={this.reset.bind(this)} />
			</div>
		)

	}
}

function mapStateToProps(state) {
	return {
		winner: state.winner
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		resetBoard: resetBoard,
		setWinner: setWinner
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
