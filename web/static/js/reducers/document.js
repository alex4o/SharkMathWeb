import { handleActions, handleAction } from 'redux-actions';

export default handleActions({
	MOVE_PROBLEM: (state, action) => {
		let newState = {...state}

		let { currentIndex, newIndex } = action.payload  
		let problem = newState[currentIndex]

		newState.list.splice(currentIndex, 1)
		newState.list.splice(newIndex, 0, problem)

		return newState;
	},
	ADD_PROBLEM: (state, action) => {
		let newState = {...state}

		newState.list.splice(action.payload.index, 0, action.payload.problem)

		return newState;
	},
	REMOVE_PROBLEM: (state, action) => {
		let newState = {...state}

		newState.list.splice(action.payload, 1)

		return newState;
	},
	SELECT_PROBLEM: (state, action) => {
		return {...state, selected: action}

	}
}, { list: [], selected: null});