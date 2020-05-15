import React from 'react'
import { Button } from 'antd';


import {observer} from 'mobx-react';
import CustomerList from './components/CustomerList';
import {CustomerForm} from './components/CustomerForm';
import { CustomerStore } from './store/CustomerStore';
import CustomerModel from './models/CustomerModel';


interface IState {
    customerFormVisible: boolean
    currentCustomer?: CustomerModel
}


@observer
export default class DataItem extends React.Component<{store: CustomerStore}, IState> {
    constructor(props: any) {
        super(props)

        this.state = {customerFormVisible: false, currentCustomer: undefined};
    }
    render() {
        return(
            <div>
                <Button  type="primary" style={{ marginBottom: 16, marginTop: 16 }} onClick={() => {this.setState({customerFormVisible: true});}}>
                    Add Customer
                </Button>
                <CustomerForm visible={this.state.customerFormVisible} data={this.state.currentCustomer} onCreate={() => {}} onCancel={() => {
                    this.setState({customerFormVisible: false, currentCustomer: undefined});
                }}/>
                <CustomerList onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)} data={this.props.store.customers} />
            </div>
        );
    }

    onDelete = (id : string) => {
        console.log(id);
    }

    onEdit = (key : string) => {
        this.setState({customerFormVisible: true, currentCustomer: this.props.store.findCustomer(key)});
    }
}