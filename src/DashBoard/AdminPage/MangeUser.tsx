import { Button, Pagination, Space, Table, TableColumnsType } from "antd";
import { useAllUserQuery, useUpdateStatusMutation } from "../../Redux/Feature/authApi";
import { toast } from "sonner";

interface DataType {
    key: React.Key;
    id: string,
    name: string;
    email: string;
    role: string;
    isBlocked: string,
}




const MangeUser = () => {
    const { data: allUser ,isFetching } = useAllUserQuery(undefined)
    const [updataStatusToDB] = useUpdateStatusMutation()


    const updataStatus =async (id: React.Key, status: string) => {

        const data = {
            id: id,
            data: {
                isBlocked: status
            }
        }

        

        const tid = toast.loading("updating...")
        try {
            const result = await updataStatusToDB(data).unwrap()
            if (result) {
                toast.success(result.message, { id:tid })
               
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id:tid })
        }





    }





    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataOptions: DataType[] = allUser?.data.map((user: any) => (
        {
            key: user?._id,
            id: user?._id,
            name: user?.name,
            email: user?.email,
            role: user?.role,
            isBlocked: user?.isBlocked
        }
    ))

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Status',
            dataIndex: 'isBlocked',
        },
        {
            title: 'Action',
            render: (_, item) => {
                const status = item?.isBlocked
                return (
                    <>
                        <Space>

                            {
                                status === "active" ? <Button onClick={() => updataStatus(item.key, "block")}>Block</Button> : <Button onClick={() => updataStatus(item.key, "active")}>UnBlock</Button>
                            }



                        </Space>
                    </>
                )
            }
        },
    ];




    return (
        <div >
            <div className="text-center capitalize text-2xl font-bold underline">all user</div>

            <div className="pt-12">

                <Table<DataType> scroll={{ x: 'max-content' }} loading={isFetching} columns={columns} dataSource={dataOptions} pagination={false} />
            </div>


            <br />
            <Pagination align="center" current={1} ></Pagination>
        </div>
    );
};

export default MangeUser;