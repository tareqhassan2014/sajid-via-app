import axios from './axios';

export const getProducts = (index: number) => {
    return axios.get(`product/admin/getAllProductsAdmin/${index - 1}`);
};
