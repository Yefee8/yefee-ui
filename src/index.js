import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as Button } from './components/Button/Button.tsx';
import { default as Input } from './components/Input/Input.tsx';
import { default as Alert } from './components/Alert/Alert.tsx';
import { default as Dropdown } from './components/Dropdown/Dropdown.tsx';
import { default as DropdownBase } from './components/Dropdown/DropdownBase.tsx';
import { default as Tooltip } from './components/Tooltip/Tooltip.tsx';
import { default as TooltipBase } from './components/Tooltip/TooltipBase.tsx';
// import Testing from './components/Test/testing.tsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Testing /> */}
  </React.StrictMode>
);

reportWebVitals();
