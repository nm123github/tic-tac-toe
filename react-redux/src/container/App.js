
import React from 'react';
import Board from './Board'
import Dashboard from './Dashboard'

class App extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Board rows={3} cols={3} />
				<Dashboard />
			</div>
		)
	}

}

export default App;
