import React from 'react';
import './App.css';

import DataItem from './DataItem'
import { useCustomerStore } from './store/CustomerStore';
import { CustomerModel } from './models/CustomerModel';
import moment from 'moment';

function App() {



  const customerStore = useCustomerStore([
    new CustomerModel('Roze','Jeness',moment('1980-10-05'),'Sachs',['ar', 'sf', 'ros'],'rjeness0@boston.com'),
    new CustomerModel('Reid','McGarvie',moment('1951-10-29'),'Bashford',['ar', 'sf', 'ros'],'rmcgarvie1@sitemeter.com'),
    new CustomerModel('Thadeus','Guilford',moment('1951-09-03'),'Lighthouse Bay',['ar', 'sf', 'ros'],'tguilford2@timesonline.co.uk'),
    new CustomerModel('Maxwell','Hugenin',moment('1980-06-19'),'Prairie Rose',['ar', 'sf', 'ros'],'mhugenin3@bloglines.com'),
    new CustomerModel('Kendre','Rouzet',moment('1969-07-01'),'Oxford',['ar', 'sf', 'ros'],'krouzet4@samsung.com'),
    new CustomerModel('Rickard','Liversidge',moment('1970-06-09'),'Meadow Vale',['ar', 'sf', 'ros'],'rliversidge5@google.nl'),
    new CustomerModel('Murial','McKinnon',moment('1999-09-05'),'Golden Leaf',['ar', 'sf', 'ros'],'mmckinnon6@webnode.com'),
    new CustomerModel('Anni','Larham',moment('1989-01-05'),'Chinook',['ar', 'sf', 'ros'],'alarham7@si.edu'),
    new CustomerModel('Maure','Spiniello',moment('1983-06-13'),'Stone Corner',['ar', 'sf', 'ros'],'mspiniello8@nasa.gov'),
    new CustomerModel('Camila','Casolla',moment('1988-07-23'),'Summit',['ar', 'sf', 'ros'],'ccasolla9@discovery.com'),
    new CustomerModel('Joshuah','Pavelka',moment('1976-01-15'),'Quincy',['ar', 'sf', 'ros'],'jpavelkaa@illinois.edu'),
    new CustomerModel('Jessi','Laffin',moment('1991-09-21'),'Milwaukee',['ar', 'sf', 'ros'],'jlaffinb@mail.ru'),
    new CustomerModel('Pippy','Goodall',moment('1977-08-09'),'Jay',['ar', 'sf', 'ros'],'pgoodallc@unesco.org'),
    new CustomerModel('Bendix','Demsey',moment('1963-10-15'),'Mallard',['ar', 'sf', 'ros'],'bdemseyd@cornell.edu'),
    new CustomerModel('Rosanne','Walcher',moment('1977-04-20'),'Cascade',['ar', 'sf', 'ros'],'rwalchere@google.co.uk'),
    new CustomerModel('Odetta','Hay',moment('1985-01-30'),'Forster',['ar', 'sf', 'ros'],'ohayf@feedburner.com'),
    new CustomerModel('Adaline','Apark',moment('1969-10-26'),'Burrows',['ar', 'sf', 'ros'],'aaparkg@gov.uk'),
    new CustomerModel('Gizela','Carpmile',moment('1980-02-05'),'Orin',['ar', 'sf', 'ros'],'gcarpmileh@wunderground.com'),
    new CustomerModel('Jody','Barhem',moment('1966-07-15'),'Goodland',['ar', 'sf', 'ros'],'jbarhemi@phpbb.com'),
    new CustomerModel('Candi','Cristofalo',moment('1972-12-20'),'Dayton',['ar', 'sf', 'ros'],'ccristofaloj@paypal.com'),
    new CustomerModel('Myrtie','De Hailes',moment('1982-09-05'),'Waxwing',['ar', 'sf', 'ros'],'mdehailesk@icio.us'),
    new CustomerModel('Laina','Saphin',moment('1985-03-23'),'Morrow',['ar', 'sf', 'ros'],'lsaphinl@google.com.br'),
    new CustomerModel('Marlow','Itzik',moment('1955-08-03'),'Golden Leaf',['ar', 'sf', 'ros'],'mitzikm@delicious.com'),
    new CustomerModel('Aryn','Finney',moment('1963-04-20'),'Dottie',['ar', 'sf', 'ros'],'afinneyn@ycombinator.com'),
    new CustomerModel('Boy','Caslin',moment('1973-09-09'),'Pleasure',['ar', 'sf', 'ros'],'bcaslino@amazonaws.com'),
    new CustomerModel('Rita','Dreakin',moment('1972-12-21'),'Milwaukee',['ar', 'sf', 'ros'],'rdreakinp@drupal.org'),
    new CustomerModel('Reeba','Francino',moment('1975-03-01'),'Armistice',['ar', 'sf', 'ros'],'rfrancinoq@flickr.com'),
    new CustomerModel('Hilda','Currao',moment('1980-10-31'),'Northview',['ar', 'sf', 'ros'],'hcurraor@army.mil'),
    new CustomerModel('Curcio','Cawthron',moment('1973-12-05'),'Granby',['ar', 'sf', 'ros'],'ccawthrons@amazon.co.uk'),
    new CustomerModel('Vittoria','Lidgely',moment('1970-12-24'),'Helena',['ar', 'sf', 'ros'],'vlidgelyt@mozilla.org')
  ]);
  return (
    <div className="App">
      <DataItem store={customerStore} />
    </div>
  );
}

export default App;
