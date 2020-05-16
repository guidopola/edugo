import { Table, Popconfirm, Button, Tooltip } from 'antd'
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { CustomerStore } from '../store/CustomerStore';
import CustomerModel from '../models/CustomerModel';
import { LocationFormat } from './CustomerForm';


interface CustomerListProps {
    store: CustomerStore;
    onEdit: (key: string) => void;
    onDelete: (key: string) => void;
    onRowSelection: (rows: any) => void;
}

@observer
export default class CustomerList extends React.Component<CustomerListProps> {
    columns: ColumnProps<CustomerModel>[] = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Last Name',
            key: 'lastname',
            dataIndex: 'lastname'
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
            title: 'Location',
            key: 'location',
            dataIndex: 'location',
            render: (text, record) => LocationFormat(record.location),
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
        return <Table rowSelection={{type: 'checkbox', onChange: (s) => this.props.onRowSelection(s)}} dataSource={this.props.store.customers} columns={this.columns} 
            pagination={{position: ['bottomCenter'], showSizeChanger: true, pageSizeOptions: ['5', '10', '25'] }} />;
    }
};
 

