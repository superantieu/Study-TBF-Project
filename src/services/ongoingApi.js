import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ongoingApi = createApi({
  reducerPath: "ongoingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5103/api/",
  }),
  endpoints: (builder) => ({
    getOngoingProject: builder.query({
      query: (params) => ({
        url: `Projects`,
        params,
      }),
    }),
    getSpecificProject: builder.query({
      query: (params) => ({
        url: `Projects/${params}`,
      }),
    }),
    getTimeSheet: builder.query({
      query: (params) => ({
        url: `TimeSheet`,
        params,
      }),
    }),
  }),
});

export const { useGetOngoingProjectQuery } = ongoingApi;
export const { useGetTimeSheetQuery } = ongoingApi;
export const { useGetSpecificProjectQuery } = ongoingApi;
