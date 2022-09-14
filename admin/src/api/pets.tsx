import axios from './axios';

export const getPets = () => {
    return axios.get('pet/admin/allpets');
};
