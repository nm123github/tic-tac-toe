
import React, { Component } from 'react';
import styles from '../css/cell.css'

export default class Cell extends Component {

	constructor(props) {
		super(props)
	}

	getClassName() {
		return styles.emptycell
	}

	play() {
		if ( this.props.value === '' )
			this.props.play(this.props.id)
	}

	render() {
		return (
			<div 
				onClick={this.play.bind(this)} 
				className={this.getClassName()}>
					{this.props.value}
			</div>
		)
	}

}