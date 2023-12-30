import { api } from "../../api/apiSice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = bookApi;
