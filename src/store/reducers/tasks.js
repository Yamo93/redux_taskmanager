import * as actionTypes from'../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    tasks: [],
    success: false,
    message: null
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
        tasks: state.tasks.concat(action.task)
    });
};

const deleteTask = (state, action) => {
    return updateObject(state, {
        success: false,
        message: "Task successfully deleted.",
        tasks: state.tasks.filter(task => {
            return task.id !== action.task.id;
        })
    });
};

const registerTaskAsDone = (state, action) => {
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
        tasks: [...action.tasks]
    });
};

const loadTasks = (state, action) => {
    return updateObject(state, {
        tasks: [...action.tasks]
    });
}

const hideMessage = (state, action) => {
    return updateObject(state, { message: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: return addTask(state, action);

        case actionTypes.DELETE_TASK: return deleteTask(state, action);

        case actionTypes.REGISTER_TASK_AS_DONE: return registerTaskAsDone(state, action);
        
        case actionTypes.HIDE_MESSAGE: return hideMessage(state, action);

        case actionTypes.GET_TASKS: return getTasks(state, action);

        case actionTypes.LOAD_TASKS: return loadTasks(state, action);

        default: return state;
    }
};

export default reducer;