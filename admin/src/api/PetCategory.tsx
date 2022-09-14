import axios from './axios';

export const getPetCategory = () => {
    return axios.get('pet/category/admin');
};
