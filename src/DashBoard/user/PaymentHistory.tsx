/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType } from "antd";
import { useMyPaymentHistoryQuery } from "../../Redux/Feature/ProductApi";
import { useAppSelector } from "../../Redux/hook";

interface DataType {
    key: React.Key;
    customerName: string;
    customerMail: string;
    totalCost: number;
    orderStatus: string;
    paymentStatus: string; 
    paymentId: string;
}

const PaymentHistory = () => {
    const email = useAppSelector((state) => state.auth.user?.email);
    const { data: myPaymentHistory, isFetching } = useMyPaymentHistoryQuery(email);

    console.log(myPaymentHistory);

    
    const dataOptions: DataType[] = myPaymentHistory?.data?.map((item: any) => ({
        key: item?._id,
        customerName: item?.customerName,
        customerMail: item?.customerMail,
        paymentStatus: item?.paymentStatus ? "Success" : "Failed", 
        orderStatus: item?.orderStatus,
        totalCost: item?.totalCost,
        paymentId: item?.paymentId,
    })) || []; 

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "customerName",
        },
        {
            title: "Email",
            dataIndex: "customerMail",
        },
        {
            title: "Payment Status",
            dataIndex: "paymentStatus",
            render: (status) => (
                <span
                    className={`font-semibold ${status === "Success" ? "text-green-500" : "text-red-500"
                        }`}
                >
                    {status}
                </span>
            ),
        },
        {
            title: "Order Status",
            dataIndex: "orderStatus",
        },
        {
            title: "Total Cost",
            dataIndex: "totalCost",
        },
        {
            title: "Transaction ID",
            dataIndex: "paymentId",
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Your Payment History</h1>

            <div className="pt-12">
                <Table<DataType>
                    scroll={{ x: "max-content" }}
                    loading={isFetching}
                    columns={columns}
                    dataSource={dataOptions}
                    pagination={false}
                />
            </div>
        </div>
    );
};

export default PaymentHistory;
