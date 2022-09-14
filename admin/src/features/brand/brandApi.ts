import { apiSlice } from './../api/apiSlice';

export const brandApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: () => '/brand/admin',
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

export const { useGetBrandsQuery, useUpdateBrandMutation } = brandApi;
