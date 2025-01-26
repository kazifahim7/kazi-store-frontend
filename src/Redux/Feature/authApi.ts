import { baseApi } from "../Api/baseApi";

const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({

        // <- register user ->
        register:builder.mutation({
            query:(data)=>({
                url:'',
                method:"POST",
                body:data
            })
        })



    })
})



export const {useRegisterMutation}=authApi