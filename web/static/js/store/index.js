
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import documentReducer from "../reducers/document"
import { routerReducer } from 'react-router-redux'



export default (preloadedState) => {
	const store = createStore(
		combineReducers({ 
			document: documentReducer,
			routing: routerReducer}),
		preloadedState,
		compose(
			applyMiddleware(thunk, createLogger()),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	)

	return store
}