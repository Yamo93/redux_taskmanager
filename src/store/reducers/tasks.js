import * as actionTypes from'../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    tasks: [],
    success: false,
    message: null,
    loading: false
};

const startSpinner = (state, action) => {
    return updateObject(state, { loading: true });
};

const addTask = (state, action) => {
    if (action.task.text === '') {
        return updateObject(state, {
            success: false,
            message: "You can't leave the field empty."
        });
    }

    return updateObject(state, {
        success: true,
        message: "Task successfully added.",
        tasks: state.tasks.concat(action.task),
        loading: false
    });
};

const deleteTask = (state, action) => {
    return updateObject(state, {
        success: false,
        message: "Task successfully deleted.",
        loading: false,
        tasks: state.tasks.filter(task => {
            return task.id !== action.task.id;
        })
    });
};

const registerTaskAsDone = (state, action) => {
    console.log('hey from reducer');
    return updateObject(state, {
        tasks: state.tasks.map(task => {
            if (task.id !== action.task.id) {
                return task; // its not what we look after
            }

            return {
                ...task,
                done: !task.done
            };
        })
    });
};

const getTasks = (state, action) => {
    return updateObject(state, {
        tasks: [...action.tasks],
        loading: false
    });
};

const loadTasks = (state, action) => {
    return updateObject(state, {
        tasks: [...action.tasks],
        loading: false
    });
}

const hideMessage = (state, action) => {
    return updateObject(state, { message: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: return addTask(state, action);

        case actionTypes.DELETE_TASK: return deleteTask(state, action);

        case actionTypes.START_SPINNER: return startSpinner(state, action);

        case actionTypes.REGISTER_TASK_AS_DONE: return registerTaskAsDone(state, action);
        
        case actionTypes.HIDE_MESSAGE: return hideMessage(state, action);

        case actionTypes.GET_TASKS: return getTasks(state, action);

        case actionTypes.LOAD_TASKS: return loadTasks(state, action);

        default: return state;
    }
};

export default reducer;