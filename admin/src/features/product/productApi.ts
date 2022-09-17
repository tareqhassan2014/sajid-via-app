import { apiSlice } from './../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductCategory: builder.query({
            query: () => '/product/category/admin',
            providesTags: ['product-categories'],
        }),

        getProductOrder: builder.query({
            query: () => '/order/get/product',
        }),

        getProduct: builder.query({
            query: (query) => ({
                method: 'GET',
                url: `/product/admin/getAllProductsAdmin/${query - 1}`,
            }),
            providesTags: ['product'],
        }),

        updateProductCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/product/category/${param}`,
                body: body,
            }),
            invalidatesTags: ['product-categories'],
        }),

        updateProduct: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/product/${param}`,
                'Content-Type': 'multipart/form-data',
                body,
            }),
            invalidatesTags: ['product'],
        }),

        addProductCategory: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/product/category',
                body: body,
            }),
            invalidatesTags: ['product-categories'],
        }),

        addProduct: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/product',
                'Content-Type': 'multipart/form-data',
                body,
            }),
            invalidatesTags: ['product'],
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
    useGetProductOrderQuery,
} = productApi;
