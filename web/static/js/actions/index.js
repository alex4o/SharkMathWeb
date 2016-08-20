import { createActions, createAction } from 'redux-actions';

export default createActions({
	MOVE_PROBLEM: (currentIndex, newIndex) => ({ currentIndex, newIndex }),
	ADD_PROBLEM: (problem, index) => ({ problem, index }),
	REMOVE_PROBLEM : index => index
})