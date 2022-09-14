/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IUser {
    token: string | null;
}

const initialState = {
    token: null,
} as IUser;

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, { payload: token }) => {
            state.token = token;
        },

        logOut: (state) => {
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.user;
