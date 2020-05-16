import { CustomerModel } from '../models/CustomerModel';
import { useLocalStore } from 'mobx-react';

export type CustomerStore = ReturnType<typeof useCustomerStore>;


export const useCustomerStore = (defaultCustomers: CustomerModel[] = []) => {
    const store = useLocalStore(() => ({
        customers: defaultCustomers,

        createCustomer(item: any) {
            store.customers = [...store.customers, (new CustomerModel(
                item.name, 
                item.lastname, 
                item.birthdate, 
                item.address, 
                item.location, 
                item.email
            ))];
        },

        removeCustomer(key: string): void {
            store.customers = store.customers.filter((customer) => customer.key !== key);
        },

        findCustomer(key: string) {
            return store.customers.find((customer) => customer.key === key);
        },

        editCustomer(key: string, data: Partial<CustomerModel>): void {
            store.customers = store.customers.map((customer: CustomerModel) => {
                if (customer.key === key) {
                    // FIXME: use customer.name = data.name || customer.name?
                    if (data.name) customer.name = data.name;
                    if (data.lastname) customer.lastname = data.lastname;
                    if (data.birthdate) customer.birthdate = data.birthdate;
                    if (data.address) customer.address = data.address;
                    if (data.location) customer.location = data.location;
                    if (data.email) customer.email = data.email;
                }
                return customer;
            });
        },

        editOrCreateCustomer(data: Partial<CustomerModel>): void {
            console.log(data);
            if (data.key)
                this.editCustomer(data.key, data);
            else
                this.createCustomer(data);
        },
    }));
    return store;
};