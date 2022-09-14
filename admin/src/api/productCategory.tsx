import axios from './axios';

export const getProductCategory = () => {
    return axios.get('product/category/admin');
};
