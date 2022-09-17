import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/store';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: [
        'product-categories',
        'brand',
        'product',
        'pet-category',
        'pet',
        'offer',
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
