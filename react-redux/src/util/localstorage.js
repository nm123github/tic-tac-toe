

export const loadState = () => {
	try {
		/*const serializedState = localStorage.getItem('state');
		if ( serializedState === null ) {
			return undefined;
		}
		return JSON.parse(serializedState);*/
		return undefined;
	} catch (err) {
		console.log("Error -> " + err)
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		// your state should generally be serializable
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		// ignore
		console.log("Error -> " + err)
	}
}