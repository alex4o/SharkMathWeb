
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import documentReducer from "../reducers/document"


export default (preloadedState) => {
	const store = createStore(
		documentReducer,
		preloadedState,
		compose(
			applyMiddleware(thunk, createLogger()),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	)

	return store
}