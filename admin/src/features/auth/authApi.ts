import { apiSlice } from './../api/apiSlice';
import { setCredentials } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setCredentials(result.data.token));
                    console.log(result.data);
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        signIn: builder.mutation({
            query: (data) => ({
                url: '/user/signin/',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setCredentials(result.data.token));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
