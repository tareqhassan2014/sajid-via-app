import axios from './axios';

interface IBody {
    email: string;
    password: string;
}

export const signIn = (body: IBody) => {
    return axios.post('user/signin/', {
        body,
    });
};
