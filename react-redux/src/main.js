
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './container/App';
import { loadState, saveState } from './util/localstorage';
import configureStore from './store/configureStore';

const state = loadState() ? undefined : undefined;
const store = configureStore(state);
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
