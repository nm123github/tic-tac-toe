
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

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
	  <Provider store={store}>
	    <App />
	  </Provider>
	  , document.getElementById('mount'));
});
