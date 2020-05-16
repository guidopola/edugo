import React from 'react'
import { Button, Popconfirm, Tooltip } from 'antd';
import CustomerList from './CustomerList';
import {CustomerForm} from './CustomerForm';
import { CustomerStore } from '../store/CustomerStore';
import CustomerModel from '../models/CustomerModel';
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';


interface CustomerViewState {
    customerFormVisible: boolean
    currentCustomer?: CustomerModel
    selectedCustomers: string[]
    disableDeleteButton: boolean
}

interface CustomerViewProps {
    store: CustomerStore;
}


export default class DataItem extends React.Component<CustomerViewProps, CustomerViewState> {
    constructor(props: any) {
        super(props)

        this.state = {customerFormVisible: false, currentCustomer: undefined, selectedCustomers: [], disableDeleteButton: true};
    }

    render() {
        return(
            <>
                <Popconfirm title="Delete?" onConfirm={this.onDeleteSelected.bind(this)}>
                    <Tooltip title="Remove row">
                        <Button disabled={this.state.disableDeleteButton} style={{ margin: 16 }} type="primary" icon={<DeleteOutlined />}>Delete selected</Button>
                    </Tooltip>
                </Popconfirm>                    
                <Button  type="primary" style={{ margin: 16 }} icon={<PlusSquareOutlined />} onClick={() => {
                    this.setState({customerFormVisible: true, currentCustomer: undefined});
                }}>
                    Add Customer
                </Button>
                <CustomerForm visible={this.state.customerFormVisible} data={this.state.currentCustomer} onAccept={this.onCustomerFormOk.bind(this)} onCancel={() => {
                    this.setState({customerFormVisible: false});
                }}/>
                <CustomerList onRowSelection={this.onCustomerListSelectionChanged.bind(this)} onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)} store={this.props.store} />
            </>
        );
    }

    hideForm() {
        this.setState({customerFormVisible: false});
    }

    onDeleteSelected = () => {
        this.state.selectedCustomers.forEach(key => this.props.store.removeCustomer(key));
        this.setState({selectedCustomers: []});
    }


    onCustomerListSelectionChanged = (rows: string[]) => {
        this.setState({selectedCustomers: rows, disableDeleteButton: rows.length  == 0});
    }

    onDelete = (key : string) => {
        this.props.store.removeCustomer(key);
    }

    onCustomerFormOk = (customer: CustomerModel) => {
        this.hideForm();
        this.props.store.editOrCreateCustomer(customer);
    }

    // FIXME: Rename, onEditButtonClicked?
    onEdit = (key : string) => {
        this.setState({customerFormVisible: true, currentCustomer: this.props.store.findCustomer(key)});
    }
}