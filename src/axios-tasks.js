import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://redux-task-manager.firebaseio.com/'
});

export default instance;