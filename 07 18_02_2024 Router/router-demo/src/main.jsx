import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import AppOpt2 from './AppOpt2.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    //opt1
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>

    //opt2
    <AppOpt2 />
)
