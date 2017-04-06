
import React, { Component } from 'react'

export default class Dashboard extends Component {	

	constructor(props) {
		super(props)

	}

	render() {
		const winner = this.props.winner
							?<h1>And the winner is: {this.props.winner}</h1>
							:<p></p>
		return (
			<div>
				{winner}					
				<input type="button" value="reset" onClick={this.props.reset} />
			</div>
		)

	}
}