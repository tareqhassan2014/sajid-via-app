import axios from './axios';

export const updateBrand = (id: number, isActive: boolean) => {
    return axios.put(`brand/${id}`, { isActive: isActive ? 1 : 0 });
};
