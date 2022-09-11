import axios from './axios';

export const updateProductCategory = (id: number, isActive: boolean) => {
    return axios.put(`product/category/${id}`, { isActive: isActive ? 1 : 0 });
};
