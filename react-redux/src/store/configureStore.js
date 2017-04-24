
import { createStore, applyMiddleware } from 'redux';	// <-- create store
import reducers from '../reducers';

// logging wrapper!
const logger = (store) => {
	return (next) => {
		return (action) => {
			if ( typeof action ==="function" || action.then === "function" ) {
				return next(action);
			}
			console.group(action.type);
			console.log('%c prev state', 'color: gray', store.getState());
			console.log('%c action', 'color: blue', action);
			const returnValue = next(action);	// returns the action object!
			console.log('%c next state', 'color: green', store.getState());
			console.groupEnd(action.type);
			return returnValue;
		}
	}
}

// promise wrapper!
const promise = (store) => {
	return (next) => {
		return (action) => {
			if ( typeof action.then === 'function' ) {
				action.then((res) => {
					next(res);
				}).catch((err) => {});
			} else {
				next(action);
			}
		}
	}
}

//thunk wrapper
const thunk = (store) => {
	return (next) => {
		return (action) => {
			if ( typeof action === "function" ) {
				// action(next); <-- please dont do this!!
				action(store.dispatch, store.getState());
			} else {
				next(action);
			}
		}
	}
}

const wrapDispatchWithMiddlewares = (store, middlewares: []) => {
	middlewares.forEach((middleware) => store.dispatch = middleware(store)(store.dispatch))
}

export default function configureStore(initialState: any) {
	//const createStoreWithMiddleware = applyMiddleware()(createStore);
	//const store = createStoreWithMiddleware(reducers, initialState);

	const middlewares = [];
	if ( process.env.NODE_ENV !== 'production' ) {
		middlewares.push(logger);
	}
	//middlewares.push(promise);
	middlewares.push(thunk);

	// why write our own when we could use applyMiddleware()!
	//wrapDispatchWithMiddlewares(store, middlewares);

	//applyMiddleware returns an enhancer!
	const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

	return store;
}