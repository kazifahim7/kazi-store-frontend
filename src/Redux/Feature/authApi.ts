import { baseApi } from "../Api/baseApi";

const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({

        // <- register user ->
        register:builder.mutation({
            query:(data)=>({
                url:'/auth/create-user',
                method:"POST",
                body:data
            })
        }),

        login:builder.mutation({
            query:(data)=>({
                url:'/auth/login',
                method:"POST",
                body:data
            })
        }),

        allUser:builder.query({
            query:()=>({
                url:'/auth/all-users',
                method:"GET",
            }),
            providesTags:["user"]
        }),


        updateStatus: builder.mutation({
            query: (data) => ({
                url: `/auth/update-status/${data.id}`,
                method: "PATCH",
                body: data.data
            }),
            invalidatesTags:["user"]
        }),



    })
})



export const {useRegisterMutation,useLoginMutation,useAllUserQuery,useUpdateStatusMutation}=authApi