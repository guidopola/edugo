import { CustomerModel } from '../models/CustomerModel';
import { useLocalStore } from 'mobx-react';


export type CustomerStore = ReturnType<typeof useCustomerStore>;


export const useCustomerStore = (defaultCustomers: CustomerModel[] = []) => {
    const store = useLocalStore(() => ({
        customers: defaultCustomers,
        addCustomer(item: CustomerModel) {
            store.customers.push(new CustomerModel(
                item.name, 
                item.lastName, 
                item.birthDate, 
                item.address, 
                item.location, 
                item.email
            ));
        },

        removeCustomer(key: string): void {
            store.customers = store.customers.filter((customer) => customer.key !== key);
        },

        findCustomer(key: string) {
            return store.customers.find((customer) => customer.key === key);
        },

        editCustomer(id: number, data: Partial<CustomerModel>): void {

        },
    }));
    return store;
};