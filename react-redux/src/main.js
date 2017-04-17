
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';	// <-- create store

import App from './container/App';
import reducers from './reducers';
import { loadState, saveState } from './util/localstorage';

const state = loadState();
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers, state);
store.subscribe(() => {
	saveState(store.getState());
})
const storeLoggingDispatch = (store) => {
	const storeDispatch = store.dispatch;
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = storeDispatch(action);	// returns the action object!
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	}
}

if ( process.env.NODE_ENV !== 'production' ) {
	store.dispatch = storeLoggingDispatch(store);
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
	  <Provider store={store}>
	    <App />
	  </Provider>
	  , document.getElementById('mount'));
});
