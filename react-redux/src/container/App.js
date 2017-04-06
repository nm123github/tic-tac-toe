
import React, { Component } from 'react';
import Board from './Board'
import Dashboard from './Dashboard'

import { connect } from 'react-redux'	// <-- is the glue between react and redux
import { bindActionCreators } from 'redux'
import { setWinner } from '../actions/index'

class App extends Component {
	
	constructor(props) {
		super(props)
		
		//this.state = {
			//winner: ''
		//}
	}

	reset() {
		// http://andrewhfarmer.com/component-communication/
		// http://stackoverflow.com/questions/41664534/passing-messages-between-components-in-react-js/
		// console.log('how do i pass reset to Board...?')

		// Gotcha: this 'Board' is no longer a component (but a container)
		// it does NOT have reset
		// Please use redux to reset board
		this.refs.Board.reset();

	}

	hasWinner(winner) {
		//this.setState({
			//winner: winner
		//})
		this.props.setWinner(winner);
		console.log(this.props.winner)
	}

	render() {
		return (
			<div>
				<Board ref='Board' rows={3} cols={3} hasWinner={this.hasWinner.bind(this)} />
				<Dashboard winner={this.props.winner} reset={this.reset.bind(this)} />
			</div>
		)
	}

}

// function is the glue between react and redux
function mapStateToProps(state) {
	// Whatever gets retrieved from here will show up as props inside of book-list
	return {
		winner: state.winner
	}
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({setWinner: setWinner}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(App);