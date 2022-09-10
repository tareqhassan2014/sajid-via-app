import axios from 'axios';
import { API } from '../utils/config';

export const getPets = (index:number) => {
    return axios.get(`${API}/pet/admin/allpets`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}