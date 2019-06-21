import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const hideMessage = () => {
    return {
        type: actionTypes.HIDE_MESSAGE
    };
};

export const storeTask = (task) => {
    return dispatch => {
        axios.post('https://redux-task-manager-353c9.firebaseio.com/tasks.json', task)
        .then(response => {
            console.log('Response from async code: ' + response);
            dispatch(addTask(task));
        });
    };
};