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
    /***
     * You can try the following solution:
     * 1) Once you send the new task to the server. You then get it back. 
     * Update: I think I realized that it doesn't return the actual thing back. All it does is returning back the ID. Nothing more than that. And that's all I really need. And you can actually find it in "response.data.name".
     * 2) And once you get it back, you reformat the task so that it contains the id inside of it and not as a key.
     * 3) Then you save that in the store with the firebase id ready. So, in the Redux store: it already has the firebase id directly.
     */
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
                    firebaseID: i
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