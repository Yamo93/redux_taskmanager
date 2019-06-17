import * as actionTypes from './actionTypes';

const initialState = {
    tasks: [],
    success: false,
    message: null,
    modalShown: false
};

// Make the modalShown thing global in Redux, so that you can control it to close the modal from different places

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            if (action.task === '') {
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