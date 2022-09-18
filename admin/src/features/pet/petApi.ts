import { apiSlice } from './../api/apiSlice';

export const petApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPetCategory: builder.query({
            query: () => 'pet/category/admin',
            providesTags: ['pet-category'],
        }),

        getPetAdaptation: builder.query({
            query: (page) => `/order/get/admin/pet/${page - 1}`,
        }),

        getPetHostelOrder: builder.query({
            query: (page) => `/order/get/admin/hotel/${page - 1}`,
        }),

        getPetTreatmentOrder: builder.query({
            query: (page) => `/order/get/admin/treatment/${page - 1}`,
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
                url: '/pet',
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

            invalidatesTags: ['pet'],
        }),
    }),
});

export const {
    useGetPetCategoryQuery,
    useUpdatePetCategoryMutation,
    useGetPetTreatmentOrderQuery,
    useGetPetHostelOrderQuery,
    useAddPetCategoryMutation,
    useGetPetAdaptationQuery,
    useUpdatePetMutation,
    useAddPetMutation,
    useGetPetsQuery,
} = petApi;
