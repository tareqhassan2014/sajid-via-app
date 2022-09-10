// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    token: null,
};

// ==============================|| SLICE - MENU ||============================== //

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.token = action.payload;
        },
    },
});

export default user.reducer;
export const { setUser } = user.actions;
