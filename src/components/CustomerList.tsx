import { Table, Popconfirm, Button } from 'antd'
import React from 'react';
import { ColumnProps } from 'antd/lib/table';


export interface CustomerItem {
    key: number,
    name: string;
}

export default class CustomerList extends React.Component<{onDelete : any, data: any}, {}> {
    columns: ColumnProps<CustomerItem>[] = [
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: 'lastname',
            title: 'Last Name',
            dataIndex: 'lastname'
        },
        {
            key: 'address',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: 'email',
            title: 'Email Address',
            dataIndex: 'email'
        },
        {
            title: 'Actions',
            render: (text, record) => {
                return (
                <Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.key)}>
                    <Button>Delete</Button>
                </Popconfirm>
                );
            },
        },
    ];

    render() {
        return <Table dataSource={this.props.data} columns={this.columns} />;
    }
};
 

