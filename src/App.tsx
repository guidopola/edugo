import React from 'react';
import './App.css';

import DataItem from './DataItem'
import { useCustomerStore } from './store/CustomerStore';
import { CustomerModel } from './models/CustomerModel';
import moment from 'moment';

function App() {
  const customerStore = useCustomerStore([
    new CustomerModel(
      'Jenifer', 'Perez', 
      moment('1994-05-27'),
      'Calle 123',
      ['ar', 'sf', 'ros'],
      'la.jeny@mail.com',
    ),
    new CustomerModel(
      'Braian', 'Lopez', 
      moment('1991-01-27'),
      'Calle 123',
      ['ar', 'sf', 'ros'], 
      'el.braian@mail.com'
    ),
  ]);
  return (
    <div className="App">
      <DataItem store={customerStore} />
    </div>
  );
}

export default App;
