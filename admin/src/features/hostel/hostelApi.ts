import { apiSlice } from '../api/apiSlice';

export const petApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHostelBooks: builder.query({
            query: (page) => `/hotel_book/all/${page - 1}`,
            providesTags: ['hotel-book'],
        }),

        updateHostelBook: builder.mutation({
            query: ({ param, body }) => ({
                method: 'PUT',
                url: `/hotel_book/${param}`,
                body,
            }),

            invalidatesTags: ['hotel-book'],
        }),
    }),
});

export const { useGetHostelBooksQuery, useUpdateHostelBookMutation } = petApi;
