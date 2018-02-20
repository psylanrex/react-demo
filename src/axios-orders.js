import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-158fb.firebaseio.com/'
});

export default instance;