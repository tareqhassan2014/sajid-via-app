import axios from './axios';

export const updateOffer = (id: number, isActive: boolean) => {
    return axios.put(`offer/`, { id, activeStatus: isActive ? 1 : 0 });
};
