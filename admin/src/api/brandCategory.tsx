import axios from './axios';

export const getBrand = () => {
    return axios.get('brand/admin');
};
