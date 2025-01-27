import { baseApi } from "../Api/baseApi";

const productApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // <- register user ->

        createProduct: builder.mutation({
            query: (data) => ({
                url: '/product/create-products', 
                method: "POST",
                body: data
            }),
            invalidatesTags: ["product"]
        }),

        
        allProducts: builder.query({
            
            query: (args) => {
                const params= new URLSearchParams()
                if(args){
                
                    args.forEach((arg:{name:string,value:string })=>params.append(arg.name,arg.value))
                }

             return { 
                 url: '/product/all-products',
                 method: "GET",
                 params:params
             }
            },
            providesTags: ["product"]
        }),
        



        deleteProduct: builder.mutation({
            query: (data) => ({
                url: `/product/delete-products/${data.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"]
        }),


        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/product/products-update/${data.id}`,
                method: "PUT",
                body:data.data
            }),
            invalidatesTags: ["product"]
        }),
        
        singleProduct: builder.query({
            query: (data) => ({
                url: `/product/single-product/${data}`,
                method: "GET",
            }),
        }),


        myCartProduct: builder.query({
            query: () => ({
                url: `/cart/all-product/cost`,
                method: "GET",
            }),
            providesTags:['cart']
        }),


        addToCart: builder.mutation({
            query: (data) => ({
                url: '/cart/save-product',
                method: "POST",
                body: data
            }),
            invalidatesTags: ["cart"]
        }),
        deleteProductIntoCart: builder.mutation({
            query: (id) => ({
                url: `/cart/delete-product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["cart"]
        }),


        payment: builder.mutation({
            query: (data) => ({
                url: '/payment/create-payment',
                method: "POST",
                body: data
            }),
            invalidatesTags: ["payment"]
        }),


        myPaymentHistory: builder.query({
            query: (email) => ({
                url: `/payment/my-payment/${email}`,
                method: "GET",
            }),
            providesTags: ['payment']
        }),
        allPaymentHistory: builder.query({
            query: () => ({
                url: `/payment/all-payment`,
                method: "GET",
            }),
            providesTags: ['payment']
        }),


        updateOrderStatus: builder.mutation({
            query: (data) => ({
                url: `/payment/update-payment/${data.id}`,
                method: "PATCH",
                body: data.data
            }),
            invalidatesTags: ["payment"]
        }),


       
     
}) 
})



export const {useCreateProductMutation,useAllProductsQuery,useDeleteProductMutation,useSingleProductQuery,useUpdateProductMutation,useAddToCartMutation,useMyCartProductQuery,useDeleteProductIntoCartMutation,usePaymentMutation,useMyPaymentHistoryQuery , useAllPaymentHistoryQuery , useUpdateOrderStatusMutation}=productApi
