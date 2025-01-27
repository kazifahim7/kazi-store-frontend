/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useAllPaymentHistoryQuery, useUpdateOrderStatusMutation } from "../../Redux/Feature/ProductApi";
import { toast } from "sonner";

const AllOrders = () => {
    const { data: allOrders, isLoading } = useAllPaymentHistoryQuery(undefined);
    const [changeStatus] = useUpdateOrderStatusMutation()

    if (isLoading) {
        return <p className="text-center text-2xl font-bold mt-24">Loading...</p>;
    }

    console.log(allOrders?.data);

    const onclick=async(id:React.Key,status:string)=>{
        const idToast = toast.loading("Updating...");
        try {
            const datas = {
                id: id,
                data: { 
                    orderStatus:status
                }
            }
            console.log(datas)
            const result = await changeStatus(datas).unwrap();
            if (result) {
                toast.success(result.message, { id: idToast });
            }
       
        } catch (error: any) {
            toast.error(error.data.message, { id: idToast });
        }
    }




    return (
        <div>
            <div className="text-center capitalize text-2xl font-bold underline">
                All Orders
            </div>

            <div className="pt-12">
                <div className="overflow-x-auto">
                    {allOrders?.data?.map((order: any) => (
                        <table key={order._id} className="table border border-gray-300 mb-8">
                            {/* Table Head */}
                            <thead className="border border-gray-200 bg-gray-100">
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Order Status</th>
                                    <th>Total Cost</th>
                                    <th>Payment Status</th>
                                    <th>Transaction ID</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="pt-2">
                                <tr>
                                    <td>{order?.customerName}</td>
                                    <td>{order?.orderStatus}</td>
                                    <td>{order?.totalCost}</td>
                                    <td>{order?.paymentStatus ? "Success" : "Fail"}</td>
                                    <td>{order?.paymentId}</td>
                                    <td>
                                        <button onClick={() => onclick(order._id,"Shipping")} className="btn btn-sm  text-black px-4 py-2 rounded">
                                            Update Order Status
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                            {/* Table Footer */}
                            <tfoot>
                                <tr className="bg-gray-50">
                                    <td colSpan={6} className="text-center font-bold text-orange-400">
                                        This user ordered
                                    </td>
                                </tr>
                                    {
                                    order?.orderProducts?.map((item:any) => <tr key={item._id}>
                                        <td className="text-center">Product name : {item?.productId?.name}</td>
                                        <td className="text-center">product Price :{item?.productId?.price} </td>
                                        <td className="text-center">order quantity : {item?.quantity}</td>
                                        <td className="text-center">total Price : {item?.totalPrice}</td>
                                        <td className="text-center">address : {item?.address}</td>
                                        <td className="text-center">Available Quantity :{item?.productId?.quantity}</td>
                                    </tr>)

                                    }
                            </tfoot>
                        </table>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
