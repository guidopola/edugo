import { Table, Popconfirm, Button, Tooltip } from 'antd'
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export interface CustomerItem {
    key: number,
    name: string,
    lastName: string,
    age: number,
    address: string,
    country: string,
    email: string,
}

interface CustomerListProps {
    data: any;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export default class CustomerList extends React.Component<CustomerListProps> {
    columns: ColumnProps<CustomerItem>[] = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Last Name',
            key: 'lastname',
            dataIndex: 'lastName'
        },
        {
            title: 'Age',
            key: 'age',
            dataIndex: 'age'
        },
        {
            title: 'Address',
            key: 'address',
            dataIndex: 'address'
        },
        {
            title: 'Country',
            key: 'country',
            dataIndex: 'country'
        },
        {
            title: 'Email Address',
            key: 'email',
            dataIndex: 'email'
        },
        {
            title: 'Actions',
            render: (text, record) => {
                return (
                    <div>
                        <Tooltip title="Edit row">
                            <Button type="primary" icon={<EditOutlined />} onClick={() => this.props.onEdit(record.key)}/>
                        </Tooltip>
                        <Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.key)}>
                            <Tooltip title="Remove row">
                                <Button type="primary" icon={<DeleteOutlined />} style={{marginLeft: 8}} />
                            </Tooltip>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    render() {
        return <Table dataSource={this.props.data} columns={this.columns} rowSelection={{type: 'checkbox'}} pagination={{position: ['bottomCenter']}} />;
    }
};
 

