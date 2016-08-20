import { handleActions, handleAction } from 'redux-actions';

export default handleActions({
	MOVE_PROBLEM: (state, action) => {
		let newState = [...state]
		let { currentIndex, newIndex } = action.payload  
		let problem = newState[currentIndex]

		newState.splice(currentIndex, 1)
		newState.splice(newIndex, 0, problem)

		return newState;
	},
	ADD_PROBLEM: (state, action) => {
		let newState = [...state]

		newState.splice(action.payload.index, 0, action.payload.problem)

		return newState;
	},
	REMOVE_PROBLEM: (state, action) => {
		let newState = [...state]

		newState.splice(action.payload, 1)

		return newState;
	}
}, [{name: "hello", key: 123},{name: "world", key: 132 }]);