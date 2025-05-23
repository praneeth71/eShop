import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './Components/StateProvider';
import reducer, { initialState } from './Components/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={reducer}>
        <App />
    </UserProvider>
    
  </React.StrictMode>
);


