import axios from './axios';

export const Offer = () => {
    return axios.get('offer/admin');
};
