import { apiSlice } from './../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductCategory: builder.query({
            query: () => '/product/category/admin',
        }),

        getProduct: builder.query({
            query: (query) => ({
                method: 'GET',
                url: `product/admin/getAllProductsAdmin/${query - 1}`,
            }),
        }),

        updateProductCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `product/category/${param}`,
                body: body,
            }),
        }),
    }),
});

export const {
    useGetProductCategoryQuery,
    useUpdateProductCategoryMutation,
    useGetProductQuery,
} = productApi;
