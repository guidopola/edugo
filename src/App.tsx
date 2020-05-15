import React from 'react';
import './App.css';

import { AppState } from './DataItem';
import DataItem from './DataItem'

const appState = new AppState();


function App() {
  return (
    <div className="App">
      <DataItem appState={appState} />
    </div>
  );
}

export default App;
