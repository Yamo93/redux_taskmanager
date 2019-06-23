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

export const deleteTaskFromDB = (task) => {

    return dispatch => {
        axios.delete('https://redux-task-manager-353c9.firebaseio.com/tasks/' + task.id + '.json')
        .then(response => {
            console.log(response);

            dispatch(deleteTask(task));
        })
        .catch(error => {
            console.log(error);
        });
    };
};

export const storeTask = (task) => {

    return dispatch => {
        axios.post('https://redux-task-manager-353c9.firebaseio.com/tasks.json', task)
        .then(response => {
            
            let newTask = {
                    ...task,
                    id: response.data.name
                };

            dispatch(addTask(newTask));
        });
    };
};

export const loadTasks = (tasks) => {
    return {
        type: actionTypes.LOAD_TASKS,
        tasks: tasks
    };
};

export const getTasks = () => {
    return dispatch => {
        axios.get('https://redux-task-manager-353c9.firebaseio.com/tasks.json')
        .then(response => {
            let tasks = [];
            for (let i in response.data) {
                let task = {
                    ...response.data[i],
                    id: i
                };
                tasks.push(task);
            }

            dispatch(loadTasks(tasks));
        })
        .catch(error => {
            console.log(error);
        });
    };
}