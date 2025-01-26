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
const AllOrders = () => {
    return (
        <div >
            <div className="text-center capitalize text-2xl font-bold underline">All Order</div>

            <div className="pt-12">

                <Table<DataType> columns={columns} dataSource={data} pagination={false} />
            </div>


            <br />
            {/* <Pagination align="center" current={page} onChange={(value) => setPage(value)} pageSize={studentData?.meta?.limit} total={studentData?.meta?.total}></Pagination> */}
        </div>
    );
};

export default AllOrders;