import axios from './axios';

export const updatePet = (id: number, isActive: boolean) => {
    return axios.put(`pet/`, { id, activeStatus: isActive ? 1 : 0 });
};
