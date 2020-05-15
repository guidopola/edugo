import React from 'react'
import { Button, Typography, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


import {observable} from 'mobx';
import {observer} from 'mobx-react';
import CustomerList, { CustomerItem } from './components/CustomerList';


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
}];


@observer
export default class DataItem extends React.Component<{appState: AppState}, {}> {
    render() {
        return(
            <div>
                <CustomerList onDelete={this.onDelete.bind(this)} data={data} />
            </div>
        );
    }

    onDelete = (id : Number) => {
        console.log(id);
    }
}