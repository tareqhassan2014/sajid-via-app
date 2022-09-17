import { apiSlice } from '../api/apiSlice';

export const offerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOffer: builder.query({
            query: () => '/offer/admin',
        }),

        updateOffer: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/offer/${param}`,
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),

        addOffer: builder.mutation({
            query: (body) => ({
                method: 'Post',
                url: '/offer',
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),
    }),
});

export const { useGetOfferQuery, useUpdateOfferMutation, useAddOfferMutation } =
    offerApi;
