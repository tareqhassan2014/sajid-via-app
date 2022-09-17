import { apiSlice } from './../api/apiSlice';

export const brandApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: () => '/brand/admin',
            providesTags: ['brand'],
        }),

        updateBrand: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/brand/${param}`,
                body: body,
            }),
            invalidatesTags: ['brand'],
        }),

        createBrand: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/brand',
                body,
            }),
            invalidatesTags: ['brand'],
        }),
    }),
});

export const {
    useGetBrandsQuery,
    useUpdateBrandMutation,
    useCreateBrandMutation,
} = brandApi;
