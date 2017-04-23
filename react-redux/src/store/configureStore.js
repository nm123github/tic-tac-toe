
import { createStore, applyMiddleware } from 'redux';	// <-- create store
import reducers from '../reducers';

// logging wrapper!
const storeLoggingDispatch = (store) => {
	const storeDispatch = store.dispatch;
	return (action) => {
		if ( typeof action.then === "function" ) {
			return storeDispatch(action);
		}
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = storeDispatch(action);	// returns the action object!
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	}
}

// promise wrapper!
const storePromiseDispatch = (store) => {
	const storeDispatch = store.dispatch;
	return (action) => {
		if ( typeof action.then === 'function' ) {
			action.then((res) => {
				storeDispatch(res);
			}).catch((err) => {});
		} else {
			storeDispatch(action);
		}
	}
}

export default function configureStore(initialState: any) {
	//const createStoreWithMiddleware = applyMiddleware()(createStore);
	//const store = createStoreWithMiddleware(reducers, initialState);
	const store = createStore(reducers, initialState);
	if ( process.env.NODE_ENV !== 'production' ) {
		store.dispatch = storeLoggingDispatch(store);
	}
	store.dispatch = storePromiseDispatch(store);
	return store;
}