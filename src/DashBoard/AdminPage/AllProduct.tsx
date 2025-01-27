import { Button, Pagination, Space, Table, TableColumnsType } from "antd";
import { useAllProductsQuery, useDeleteProductMutation } from "../../Redux/Feature/ProductApi";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface DataType {
    key: React.Key;
    name: string;
    category: string;
    price: number;
    quantity: number;
    brand: string;
}



const AllProductAdmin = () => {
    const [page, setPage] = useState(1)
    const { data: allProduct, isFetching } = useAllProductsQuery([{ name: "page", value: page }, { name: "limit", value: 10 }])
    console.log(allProduct)

    const [deleteProduct] = useDeleteProductMutation()

    const deleteProductByID = async (id: React.Key) => {
        const data = { id: id }

        const toastId = toast.loading("deleting..")
        try {
            const result = await deleteProduct(data).unwrap()
            if (result) {
                toast.success(result.message, { id: toastId })

            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id: toastId })
        }

    }






    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataOptions: DataType[] = allProduct?.data?.result.map((item: any) => (
        {
            key: item?._id,
            name: item?.name,
            brand: item?.brand,
            category: item?.category,
            quantity: item?.quantity,
            price: item?.price
        }
    ))

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'category',
            dataIndex: 'category',
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
        {
            title: 'Action',

            render: (_, item) => {

                return (
                    <>
                        <Space>
                            <Link to={`/dashBoard/updateProduct/${item.key}`}>
                                <Button>Update</Button>
                            </Link>
                            
                            <Button onClick={() => deleteProductByID(item?.key)}>Delete</Button>
                        </Space>
                    </>
                )
            }
        },
    ];












    return (
        <div >
            <div className="text-center capitalize text-2xl font-bold underline">All Product</div>

            <div className="pt-12">

                <Table<DataType> scroll={{ x: 'max-content' }} loading={isFetching} columns={columns} dataSource={dataOptions} pagination={false} />
            </div>


            <br />
            <Pagination align="center" current={page} onChange={(value) => setPage(value)} pageSize={allProduct?.data?.meta?.limit} total={allProduct?.data?.meta?.total}></Pagination>
        </div>
    );
};

export default AllProductAdmin;