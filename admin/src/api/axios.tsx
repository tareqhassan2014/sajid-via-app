import axios from 'axios';
import { API } from '../utils/config';

const instance = axios.create({
    baseURL: API,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
