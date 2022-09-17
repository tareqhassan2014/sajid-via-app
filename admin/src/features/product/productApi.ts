import { apiSlice } from './../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductCategory: builder.query({
            query: () => '/product/category/admin',
        }),

        getProduct: builder.query({
            query: (query) => ({
                method: 'GET',
                url: `/product/admin/getAllProductsAdmin/${query - 1}`,
            }),
        }),

        updateProductCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/product/category/${param}`,
                body: body,
            }),
        }),

        updateProduct: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/product/${param}`,
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),

        addProduct: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/product',
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),

        addProductCategory: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/product/category',
                body: body,
            }),
        }),
    }),
});

export const {
    useGetProductCategoryQuery,
    useUpdateProductCategoryMutation,
    useGetProductQuery,
    useUpdateProductMutation,
    useAddProductCategoryMutation,
    useAddProductMutation,
} = productApi;
