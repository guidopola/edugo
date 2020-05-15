import { observable, computed } from 'mobx';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export class CustomerModel {
    readonly key: string;
    @observable public name: string;
    @observable public lastName: string;
    @observable public birthDate: moment.Moment;
    @observable public address: string;
    @observable public location: string[];
    @observable public email: string;

    constructor(name: string, 
        lastName: string, 
        birthDate: moment.Moment, 
        address: string,
        location: string[],
        email: string) {
        this.key = uuidv4();
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.location = location;
        this.email = email;
    }

    @computed
    get age() {
        const now = moment();
        const bd = this.birthDate;
        return now.diff(bd, 'y');
    }


    static key = 0;
    static generateId() {
        return this.key++;
    }
}

export default CustomerModel;