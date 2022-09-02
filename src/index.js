import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <UserProvider>
      <BrowserRouter>
         <App />
         </BrowserRouter>  
      </UserProvider>  
  
  </React.StrictMode>
);


