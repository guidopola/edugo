import { observable, computed } from 'mobx';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export class CustomerModel {
    readonly key: string;
    @observable public name: string;
    @observable public lastname: string;
    @observable public birthdate: moment.Moment;
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
        this.lastname = lastName;
        this.birthdate = birthDate;
        this.address = address;
        this.location = location;
        this.email = email;
    }

    @computed
    get age() {
        const now = moment();
        const bd = this.birthdate;
        return now.diff(bd, 'y');
    }
}

export default CustomerModel;