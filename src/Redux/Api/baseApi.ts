import {  createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://a-4-backend.vercel.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token!
        if (token) {
            headers.set("authorization", `${token}`)
        }
    }
})






export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery:baseQuery,
    tagTypes:["user","product","cart","payment"],
    endpoints:()=>({})
})