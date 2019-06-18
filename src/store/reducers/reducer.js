import * as actionTypes from '../actionTypes';

const initialState = {
    tasks: [],
    success: false,
    message: null,
    modalShown: false
};

/*** Refactoring Steps
 * 1) You have to create two separate files. one for tasks.js, and one for modal.js
 * 2) The tasks.js should only have the task-related actions.
 * 3) The modal.js should only deal with the modal part. 
 * 4) Also, the task actions shouldn't touch the modalShown part. You can deal with that separately by calling the modal-specific actions.
 * 5) After every adding of task, the hide modal should be hidden.
 */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            console.log(action);
            if (action.task.text === '') {
                return {
                    ...state,
                    success: false,
                    message: "You can't leave the field empty."
                };
            }

            return {
                ...state,
                success: true,
                message: "Task successfully added.",
                modalShown: false,
                tasks: state.tasks.concat(action.task)
            };
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                success: false,
                message: "Task successfully deleted.",
                modalShown: false,
                tasks: state.tasks.filter(task => {
                    return task.id !== action.task.id;
                })
            };
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                modalShown: true
            };
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                modalShown: false
            };
        default:
            return state;
    }
};

export default reducer;