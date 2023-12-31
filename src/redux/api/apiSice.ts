import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-server-1b94wcpza-maisha-chowa.vercel.app/",
  }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});
