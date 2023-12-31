import { api } from "../../api/apiSice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postNewBook: builder.mutation({
      query: ({data }) => ({
        url: `/add-new-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  usePostNewBookMutation,
} = bookApi;
