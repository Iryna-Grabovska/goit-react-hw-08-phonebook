import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reduserPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    register: build.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    logIn: build.mutation({
      query: ({ user }) => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    logOut: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
        invalidatesTags: ['Auth'],
      }),
    }),
    // fetchContacts: build.query({
    //   query: () => `/contacts`,
    //   providesTags: result =>
    //     result
    //       ? [
    //           ...result.map(({ id }) => ({ type: 'Contact', id })),
    //           { type: 'Contact', id: 'LIST' },
    //         ]
    //       : [{ type: 'Contact', id: 'LIST' }],
    // }),
    // deleteContacts: build.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
    // createContacts: build.mutation({
    //   query: newContacts => ({
    //     url: `/contacts`,
    //     method: 'POST',
    //     body: newContacts,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});
export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,

  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = authApi;
