import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://contact-app.mmsdev.site/api/v1`,
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (token) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: ({ data, token }) => ({
        url: "/contact",
        method: "POST",
        body: data,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),

    // delete step1 go to contact table
    deleteContact: builder.mutation({
      query: ({ token, id }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),

    singleContact : builder.query({
      query : ({token,id}) => ({
        url : `/contact/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags : ['contact']
    }),

    updateContact: builder.mutation({
      query: ({ token, newDta }) => ({
        url: `/contact/${newDta.id}`,
        method: "PATCH",
        body: newDta,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["blogApi"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
  useSingleContactQuery
} = contactApi;
