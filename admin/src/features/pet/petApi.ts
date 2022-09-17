import { apiSlice } from './../api/apiSlice';

export const petApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPetCategory: builder.query({
            query: () => 'pet/category/admin',
        }),

        updateProductCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `product/category/${param}`,
                body: body,
            }),
        }),

        updatePetCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/pet/category/${param}`,
                body: body,
            }),
        }),

        updatePet: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/pet/${param}`,
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),

        addPetCategory: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/pet/category/',
                body,
            }),
        }),

        addPet: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/pet/',
                'Content-Type': 'multipart/form-data',
                body,
            }),
        }),
    }),
});

export const {
    useGetPetCategoryQuery,
    useUpdatePetCategoryMutation,
    useAddPetCategoryMutation,
    useUpdatePetMutation,
    useAddPetMutation,
} = petApi;
