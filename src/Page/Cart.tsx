import { Button, Space, Table, TableColumnsType } from "antd";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'x',
        render: (item) => {
            return (
                <>
                    <Space>

                        <Button onClick={() => console.log(item)}>Block</Button>
                        <Button onClick={() => console.log(item)}>Block</Button>
                    </Space>
                </>
            )
        }
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
const Cart = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen" >
            <div className="text-center capitalize text-2xl font-bold mt-16">All Card Product</div>

            <div className="pt-14">

                <Table<DataType> columns={columns} dataSource={data} pagination={false} />
            </div>

            <div className="flex justify-between pt-2">
                <h1 className="text-xl font-bold">Total cost</h1>
                <h1 className="text-xl font-bold text-orange-400">100</h1>
              
            </div>


            <br />

            {/* <Pagination align="center" current={page} onChange={(value) => setPage(value)} pageSize={studentData?.meta?.limit} total={studentData?.meta?.total}></Pagination> */}
        </div>
    );
};

export default Cart;