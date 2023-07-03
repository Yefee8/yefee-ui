import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as Button } from './components/Button/Button.tsx';
import { default as Input } from './components/Input/Input.tsx';
import { default as Alert } from './components/Alert/Alert.tsx';
import { default as Dropdown } from './components/Dropdown/Dropdown.tsx';
import { default as DropdownBase } from './components/Dropdown/DropdownBase.tsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
    <DropdownBase>
      <Button color='secondary'>Open Dropdown</Button>
      <Dropdown show={true}></Dropdown>
    </DropdownBase>
  </React.StrictMode>
);

reportWebVitals();
