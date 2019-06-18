import * as actionTypes from'../actionTypes';

const initialState = {
    tasks: [],
    success: false,
    message: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
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
                    tasks: state.tasks.concat(action.task)
                };
            case actionTypes.DELETE_TASK:
                return {
                    ...state,
                    success: false,
                    message: "Task successfully deleted.",
                    tasks: state.tasks.filter(task => {
                        return task.id !== action.task.id;
                    })
                };

        default: return state;
    }
};

export default reducer;