import * as actionTypes from'../actions/actionTypes';

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
            case actionTypes.REGISTER_TASK_AS_DONE:
                return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if (task.id !== action.task.id) {
                            return task; // its not what we look after
                        }

                        return {
                            ...task,
                            done: true
                        };
                    })
                };

        default: return state;
    }
};

export default reducer;