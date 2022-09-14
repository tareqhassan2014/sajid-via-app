import { apiSlice } from './../api/apiSlice';

export const petApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPets: builder.query({
            query: () => 'pet/admin/allpets',
        }),

        updateBrand: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/brand/${param}`,
                body: body,
            }),
        }),
    }),
});

export const { useGetPetsQuery } = petApi;
