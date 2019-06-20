import * as actionTypes from './actionTypes';

export const addTask = (task) => {
    return {
        type: actionTypes.ADD_TASK,
        task: task
    };
};

export const deleteTask = (task) => {
    return {
        type: actionTypes.DELETE_TASK, 
        task: task
    };
};

export const registerTaskAsDone = (task) => {
    return {
        type: actionTypes.REGISTER_TASK_AS_DONE,
        task: task
    };
};