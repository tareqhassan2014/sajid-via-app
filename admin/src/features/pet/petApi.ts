import { apiSlice } from './../api/apiSlice';

export const petApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPetCategory: builder.query({
            query: () => 'pet/category/admin',
            providesTags: ['pet-category'],
        }),

        updatePetCategory: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/pet/category/${param}`,
                body: body,
            }),
            invalidatesTags: ['pet-category'],
        }),

        addPetCategory: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/pet/category/',
                body,
            }),
            invalidatesTags: ['pet-category'],
        }),

        getPets: builder.query({
            query: () => 'pet/admin/allpets',
            providesTags: ['pet'],
        }),

        addPet: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/pet/',
                'Content-Type': 'multipart/form-data',
                body,
            }),
            invalidatesTags: ['pet'],
        }),

        updatePet: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/pet/${param}`,
                'Content-Type': 'multipart/form-data',
                body,
            }),

            invalidatesTags: ['pet-category'],
        }),
    }),
});

export const {
    useGetPetCategoryQuery,
    useUpdatePetCategoryMutation,
    useAddPetCategoryMutation,
    useUpdatePetMutation,
    useAddPetMutation,
    useGetPetsQuery,
} = petApi;
