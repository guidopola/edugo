import React, { useState } from 'react'
import { Button, Typography, Row, Col } from 'antd';



import {observable} from 'mobx';
import {observer} from 'mobx-react';
import CustomerList, { CustomerItem } from './components/CustomerList';
import {CustomerForm, CustomerFormValues} from './components/CustomerForm';


export class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}


const data: CustomerItem[] = [{
    key: 0,
    name: 'Carlos',
    lastName: 'Perez',
    age: 37,
    address: 'Calle 123',
    country: 'Peronia',
    email: 'carlos.perez@mail.com',
}];

interface IState {
    customerFormVisible: boolean
    customerFormId: number
}

@observer
export default class DataItem extends React.Component<{appState: AppState}, IState> {
    constructor(props: any) {
        super(props)

        this.state = {customerFormVisible: false, customerFormId: -1};
    }
    render() {
        return(
            <div>
                <Button  type="primary" style={{ marginBottom: 16, marginTop: 16 }} onClick={() => {this.setState({customerFormVisible: true});}}>
                    Add Customer
                </Button>
                <CustomerForm visible={this.state.customerFormVisible} customerId={this.state.customerFormId} onCreate={() => {}} onCancel={() => {
                    this.setState({customerFormVisible: false});
                }}/>
                <CustomerList onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)} data={data} />
            </div>
        );
    }

    onDelete = (id : number) => {
        console.log(id);
    }

    onEdit = (id : number) => {
        console.log("onEdit", id);
        this.setState({customerFormVisible: true, customerFormId: id});
    }
}