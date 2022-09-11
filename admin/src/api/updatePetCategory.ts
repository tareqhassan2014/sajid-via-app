import axios from './axios';

export const updatePetCategory = (id: number, isActive: boolean) => {
    return axios.put(`pet/category`, { id, activeStatus: isActive ? 1 : 0 });
};
